import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Bebida } from 'src/app/bebida';
import { BebidaService } from 'src/app/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  bebida: Bebida = new Bebida();

  constructor(private bebidaService:BebidaService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bebidaService.criar(this.bebida).subscribe(data=>{console.log(data)}, error => console.log(error))
    this.goToList();
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }
}
