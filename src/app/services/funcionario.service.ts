import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../class/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionariosURL="https://lanchonete-funtec-api.herokuapp.com/funcionarios";

  constructor(private http:HttpClient) { }

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.funcionariosURL}`);
  }

  criar(funcionario:Funcionario):Observable<Object>{
    return this.http.post(`${this.funcionariosURL}`, funcionario);
  }

  deletar(id:number):Observable<Object>{
    return this.http.delete(`${this.funcionariosURL}/${id}`)
  }
}
