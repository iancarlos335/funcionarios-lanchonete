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
    this.doceService.criar(this.doce).subscribe(data=>{console.log(data)}, error => console.log(error))
    this.goToList();
  }

  goToList(){
    this.router.navigate(["/produtos"])
  }

}
