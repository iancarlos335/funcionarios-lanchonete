import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProdutoService} from "./produto.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { EntradaComponent } from './entrada/entrada.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosListaComponent,
    EntradaComponent,
    CriarProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
