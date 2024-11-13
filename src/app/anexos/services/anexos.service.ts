import { Injectable } from '@angular/core';
import { Anexo } from '../interfaces/anexo.interface';
import { environments } from 'src/environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  constructor(private http: HttpClient) { }




}
