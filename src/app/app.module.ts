import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { EntradaComponent } from './entrada/entrada.component';
import { BebidaService } from './bebida.service';
import { DoceService } from './doce.service';
import { SalgadoService } from './salgado.service';
import { BebidaComponent } from './criar/bebida/bebida.component';
import { DoceComponent } from './criar/doce/doce.component';
import { SalgadoComponent } from './criar/salgado/salgado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosListaComponent,
    EntradaComponent,
    BebidaComponent,
    DoceComponent,
    SalgadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [BebidaService, DoceService, SalgadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
