import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from './bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  bebidasURL ='http://localhost:8080/bebidas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(`${this.bebidasURL}`);
  }

  criar(bebida:Bebida):Observable<Object>{
    return this.http.post(`${this.bebidasURL}`, bebida);
  }
}
