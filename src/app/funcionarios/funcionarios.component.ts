import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios:Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  private getFuncionarios(){
    this.funcionarioService.listar().subscribe(data =>{this.funcionarios=data})
  }


}
