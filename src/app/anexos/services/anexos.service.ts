import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Anexo } from '../interfaces/anexo.interface';
import { environments } from 'src/environments/environments';
import { AnexoDetail } from '../interfaces/anexoDetail.interface';


interface AnexosResponse {
  count: number;
  up: number;
  down: number;
  up_rate: string;
  down_rate: string;
  data: Anexo[];
}

interface AnexoDetailResponse {
  duration_hrs: string;
  data: AnexoDetail[];
}

@Injectable({providedIn: 'root'})
export class AnexosService {

  private baseUrl: string = environments.baseUrl;
  private endpointListAnexos = 'anexos-upload-dashboard';
  private endpointDetailAnexos = 'anexos-upload';

  constructor(private http: HttpClient) { }

   getAnexos(): Observable<AnexosResponse>{
    return this.http.get<{ data: AnexosResponse }>(
      this.getUrlToListAnexos(),
      { headers: this.createAuthHeaders()}
    ).pipe(
      map(response => response.data),
      catchError(this.handleError)
    )
  }

  getAnexoDetail(key_id: string): Observable <{ duration_hrs: string; data: AnexoDetail[] }> {

    return this.http.get<{ duration_hrs: string; data: AnexoDetail[] }>(
      `${this.baseUrl}/anexos-upload/${key_id}/`,
      { headers: this.createAuthHeaders() });
  }

  private getUrlToListAnexos(path: string = ''): string {
    return `${this.baseUrl}/${this.endpointListAnexos}/${path}`
  }

  private getUrlDetailAnexos(key_id: string): string {
    return `${this.baseUrl}/${this.endpointDetailAnexos}/${key_id}/`
  }

  private getCredentials(){
    return {
      username: environments.apiUsername,
      password: environments.apiPassword,
    }
  }

  private createAuthHeaders(): HttpHeaders {
    const {username, password} = this.getCredentials()
    const authToken = btoa(`${username}: ${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${authToken}`,
      'Content-type': 'application/json'
    })
  }

  private handleError(error: any){
    let errorMessage = 'An error occurred';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else
    {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} `;
    }
    return throwError(() => errorMessage)
  }
}
