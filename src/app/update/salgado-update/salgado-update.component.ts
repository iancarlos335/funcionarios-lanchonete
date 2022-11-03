import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salgado } from 'src/app/salgado';
import { SalgadoService } from 'src/app/salgado.service';

@Component({
  selector: 'app-salgado-update',
  templateUrl: './salgado-update.component.html',
  styleUrls: ['./salgado-update.component.css']
})
export class SalgadoUpdateComponent implements OnInit {

  id:number;
  salgado:Salgado = new Salgado;

  constructor(private salgadoService: SalgadoService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.salgadoService.getById(this.id).subscribe(data => this.salgado = data) ;
  }

  onSubmit(){
    if(this.salgado.imagem==null){
      document.getElementById("error").style.display="flex";
    }else{
      this.salgadoService.atualizarSalgado(this.id,this.salgado).subscribe(data => this.goToList(),error=>{
        document.getElementById("error").style.display="flex";
      })
    }
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
