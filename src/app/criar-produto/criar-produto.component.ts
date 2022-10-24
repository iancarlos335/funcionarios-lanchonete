import { Component, OnInit } from '@angular/core';
import { Bebida } from '../bebida';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  bebida: Bebida = new Bebida();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.bebida)
  }

}
