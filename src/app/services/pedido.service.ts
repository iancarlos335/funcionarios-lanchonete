import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../class/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidosURL="https://lanchonete-funtec-api.herokuapp.com/pedidos"

  constructor(private http:HttpClient) { }

  listar(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.pedidosURL}`);
  }

  atualizarPedido(id:number, pedido: Pedido): Observable<Object>{
    return this.http.put(`${this.pedidosURL}/${id}`,pedido)
  }

  getById(id:number): Observable<Pedido>{
    return this.http.get<Pedido>(`${this.pedidosURL}/${id}`)
  }
}
