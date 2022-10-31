import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';
import { Pedido } from 'src/app/pedido';
import { PedidoService } from 'src/app/pedido.service';

@Component({
  selector: 'app-pedido-funcionario',
  templateUrl: './pedido-funcionario.component.html',
  styleUrls: ['./pedido-funcionario.component.css']
})
export class PedidoFuncionarioComponent implements OnInit {

  id:number;
  funcionarios:Funcionario[];
  pedido:Pedido = new Pedido;

  constructor(private pedidoService:PedidoService, private funcionarioService:FuncionarioService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.funcionarioService.listar().subscribe(data=>this.funcionarios=data);
    this.id = this.route.snapshot.params["id"];
    this.pedidoService.getById(this.id).subscribe(data => this.pedido=data)
  }

  onSubmit(){
    this.pedidoService.atualizarPedido(this.id, this.pedido).subscribe(data => this.goToList(),error=>{
      document.getElementById("error").style.display="flex";
    })
  }

  goToList(){
    this.router.navigate(["/pedidos"])
  }

}
