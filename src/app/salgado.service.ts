import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salgado } from './salgado';

@Injectable({
  providedIn: 'root'
})
export class SalgadoService {

  salgadosURL = "http://localhost:8080/salgados"

  constructor(private http:HttpClient) { }

  listar(): Observable<Salgado[]>{
    return this.http.get<Salgado[]>(`${this.salgadosURL}`);
  }

  criar(salgado: Salgado):Observable<Object>{
    return this.http.post(`${this.salgadosURL}`, salgado);
  }

  getById(id:number): Observable<Salgado>{
    return this.http.get<Salgado>(`${this.salgadosURL}/${id}`)
  }

  atualizarSalgado(id:number, salgado: Salgado): Observable<Object>{
    return this.http.put(`${this.salgadosURL}/${id}`,salgado)
  }
}
