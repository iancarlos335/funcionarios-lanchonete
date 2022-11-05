import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../class/pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:Pedido[];

  constructor(private pedidoService:PedidoService, private router:Router) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  private getPedidos(){
    this.pedidoService.listar().subscribe(data=> this.pedidos = data)
  }

  selectFuncionario(id:number){
    this.router.navigate(["escolher-funcionario",id])
  }

}
