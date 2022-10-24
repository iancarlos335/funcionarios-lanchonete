import { Component, OnInit } from '@angular/core';
import { Bebida } from '../bebida';
import { BebidaService } from '../bebida.service';
import { Doce } from '../doce';
import { DoceService } from '../doce.service';
import { Salgado } from '../salgado';
import { SalgadoService } from '../salgado.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  bebidas: Bebida[];
  doces: Doce[];
  salgados: Salgado[];

  constructor(private bebidaService:BebidaService, private doceService:DoceService, private salgadoService:SalgadoService) { }

  ngOnInit(): void {
    this.getBebidas();
    this.getDoces
  }

  private getBebidas(){
    this.bebidaService.listar().subscribe(data =>{this.bebidas=data})
  }

  private getDoces(){
    this.doceService.listar().subscribe(data =>{this.doces=data})
  }

  private getSalgados(){
    this.salgadoService.listar().subscribe(data=>{this.salgados=data})
  }

}
