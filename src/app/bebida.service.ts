import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from './bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  bebidasURL ='https://lanchonete-funtec-api.herokuapp.com/bebidas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(`${this.bebidasURL}`);
  }

  criar(bebida:Bebida):Observable<Object>{
    return this.http.post(`${this.bebidasURL}`, bebida);
  }

  getById(id:number): Observable<Bebida>{
    return this.http.get<Bebida>(`${this.bebidasURL}/${id}`)
  }

  atualizarBebida(id:number, bebida: Bebida): Observable<Object>{
    return this.http.put(`${this.bebidasURL}/${id}`,bebida)
  }

  deletarBebida(id:number): Observable<Object>{
    return this.http.delete(`${this.bebidasURL}/${id}`)
  }
}
