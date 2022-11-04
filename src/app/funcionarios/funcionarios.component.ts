import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../class/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios:Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private router:Router) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  private getFuncionarios(){
    this.funcionarioService.listar().subscribe(data =>{this.funcionarios=data})
  }

  deleteFuncionario(id:number){
    this.funcionarioService.deletar(id).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }


}
