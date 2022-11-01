import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doce } from 'src/app/doce';
import { DoceService } from 'src/app/doce.service';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.component.html',
  styleUrls: ['./doce.component.css']
})
export class DoceComponent implements OnInit {

  doce: Doce = new Doce();

  constructor(private doceService: DoceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.doce.imagem==null){
      document.getElementById("error").style.display="flex";
    }else{
      this.doceService.criar(this.doce).subscribe(data=>this.goToList(), error => {
        console.log(error)
        document.getElementById("error").style.display="flex";
      })
    }
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
