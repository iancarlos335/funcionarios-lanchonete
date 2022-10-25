import { Component, OnInit } from '@angular/core';
import { Bebida } from 'src/app/bebida';
import { BebidaService } from 'src/app/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  bebida: Bebida = new Bebida();

  constructor(private bebidaService:BebidaService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bebidaService.criar(this.bebida);
  }
}
