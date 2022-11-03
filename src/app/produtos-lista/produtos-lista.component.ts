import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private bebidaService:BebidaService, private doceService:DoceService, private salgadoService:SalgadoService, private router:Router) { }

  ngOnInit(): void {
    this.getBebidas();
    this.getDoces();
    this.getSalgados();
  }

  private getBebidas(){
    this.bebidaService.listar().subscribe(data =>{this.bebidas=data})
  }

  createBebida(){
    this.router.navigate(["bebida"])
  }

  updateBebida(id:number){
    this.router.navigate(["bebidaUpdate",id])
  }

  deleteBebida(id:number){
    this.bebidaService.deletarBebida(id).subscribe(data => {
      console.log(data);
    })
    window.location.reload();
  }

  private getDoces(){
    this.doceService.listar().subscribe(data =>{this.doces=data})
  }

  createDoce(){
    this.router.navigate(["doce"])
  }

  updateDoce(id:number){
    this.router.navigate(["doceUpdate",id])
  }
  deleteDoce(id:number){
    this.doceService.deletarDoce(id).subscribe(data => {
      console.log(data);
    })
    window.location.reload();
  }

  private getSalgados(){
    this.salgadoService.listar().subscribe(data=>{this.salgados=data})
  }

  createSalgado(){
    this.router.navigate(["salgado"])
  }

  updateSalgado(id:number){
    this.router.navigate(["salgadoUpdate",id])
  }
  deleteSalgado(id:number){
    this.salgadoService.deletarSalgado(id).subscribe(data => {
      console.log(data);
    })
    window.location.reload();
  }

}
