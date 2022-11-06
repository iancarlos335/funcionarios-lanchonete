import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doce } from '../class/doce';

@Injectable({
  providedIn: 'root'
})
export class DoceService {

  docesURL = "http://localhost:8080/doces"

  constructor(private http:HttpClient) { }

  listar(): Observable<Doce[]>{
    return this.http.get<Doce[]>(`${this.docesURL}`);
  }

  criar(doce:Doce):Observable<Object>{
    return this.http.post(`${this.docesURL}`, doce);
  }

  getById(id:number): Observable<Doce>{
    return this.http.get<Doce>(`${this.docesURL}/${id}`)
  }

  atualizarDoce(id:number, doce: Doce): Observable<Object>{
    return this.http.put(`${this.docesURL}/${id}`,doce)
  }

  deletarDoce(id:number):Observable<Object>{
    return this.http.delete(`${this.docesURL}/${id}`)
  }
}
