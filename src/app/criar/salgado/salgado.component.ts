import { Component, OnInit } from '@angular/core';
import { Salgado } from 'src/app/salgado';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.component.html',
  styleUrls: ['./salgado.component.css']
})
export class SalgadoComponent implements OnInit {

  salgado: Salgado = new Salgado();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.salgado)
  }

}
