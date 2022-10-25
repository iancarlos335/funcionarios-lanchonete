import { Component, OnInit } from '@angular/core';
import { Doce } from 'src/app/doce';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.component.html',
  styleUrls: ['./doce.component.css']
})
export class DoceComponent implements OnInit {

  doce: Doce = new Doce();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.doce)
  }

}
