import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bebida } from 'src/app/bebida';
import { BebidaService } from 'src/app/bebida.service';

@Component({
  selector: 'app-bebida-update',
  templateUrl: './bebida-update.component.html',
  styleUrls: ['./bebida-update.component.css']
})
export class BebidaUpdateComponent implements OnInit {

  id:number;
  bebida:Bebida = new Bebida();

  constructor(private bebidaService: BebidaService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.bebidaService.getById(this.id).subscribe(data => this.bebida = data) ;
  }

  onSubmit(){
    this.bebidaService.atualizarBebida(this.id, this.bebida).subscribe(data => this.goToList(),error=>{
      document.getElementById("error").style.display="flex"
    })
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
