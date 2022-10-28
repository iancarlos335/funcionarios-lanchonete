import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salgado } from 'src/app/salgado';
import { SalgadoService } from 'src/app/salgado.service';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.component.html',
  styleUrls: ['./salgado.component.css']
})
export class SalgadoComponent implements OnInit {

  salgado: Salgado = new Salgado();

  constructor(private salgadoService:SalgadoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.salgadoService.criar(this.salgado).subscribe(data=>this.goToList(), error => console.log(error))

  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
