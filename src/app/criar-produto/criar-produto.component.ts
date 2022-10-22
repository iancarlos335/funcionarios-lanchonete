import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.produto)
  }

}
