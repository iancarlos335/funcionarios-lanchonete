import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos(){
    this.produtoService.listar().subscribe(data =>{this.produtos=data})
  }

}
