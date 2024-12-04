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

@Injectable({providedIn: 'root'})
export class AnexosService {

  private baseUrl: string = environments.baseUrl;
  private endpoints = {
    dashboard: 'anexos-upload-dashboard',
    detail: 'anexos-upload'
  };

  constructor(private http: HttpClient) { }

  private createAuthHeaders(): HttpHeaders {
    const username = environments.apiUsername;
    const password = environments.apiPassword;
    const authToken = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Authorization': `Basic ${authToken}`
    });
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => error);
  }

  getAnexos(): Observable<AnexosResponse> {
    return this.http.get<{ data: AnexosResponse }>(
      `${this.baseUrl}/${this.endpoints.dashboard}/`,
      { headers: this.createAuthHeaders() }
    ).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  getAnexoDetail(key_id: string): Observable<{ duration_hrs: string; data: AnexoDetail[] }> {
    return this.http.get<{ duration_hrs: string; data: AnexoDetail[] }>(
      `${this.baseUrl}/${this.endpoints.detail}/${key_id}/`,
      { headers: this.createAuthHeaders() }
    ).pipe(
      catchError(this.handleError)
    );
  }
}
