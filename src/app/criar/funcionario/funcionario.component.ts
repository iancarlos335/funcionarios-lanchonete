import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/funcionario';
import { FuncionarioService } from 'src/app/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.funcionarioService.criar(this.funcionario).subscribe(data=>this.goToList(), error => document.getElementById("error").style.display="flex")
  }

  goToList(){
    this.router.navigate(["/funcionarios"])
  }

}
