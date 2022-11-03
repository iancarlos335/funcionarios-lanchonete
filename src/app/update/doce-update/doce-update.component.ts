import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doce } from 'src/app/doce';
import { DoceService } from 'src/app/doce.service';

@Component({
  selector: 'app-doce-update',
  templateUrl: './doce-update.component.html',
  styleUrls: ['./doce-update.component.css']
})
export class DoceUpdateComponent implements OnInit {
  
  id:number;
  doce:Doce = new Doce();

  constructor(private doceService:DoceService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.doceService.getById(this.id).subscribe(data => this.doce = data) ;
  }

  onSubmit(){
    if(this.doce.imagem==null){
      document.getElementById("error").style.display="flex";
    }else{
      this.doceService.atualizarDoce(this.id, this.doce).subscribe(data => this.goToList(),error=>{
        document.getElementById("error").style.display="flex";
      })
    }
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
