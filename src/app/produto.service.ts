import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosURL ='https://lanchonete-funtec-api.herokuapp.com/produtos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.produtosURL}`);
  }
}
