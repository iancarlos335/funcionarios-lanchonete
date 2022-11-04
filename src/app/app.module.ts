import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EntradaComponent } from './entrada/entrada.component';
import { SalgadoService } from './services/salgado.service';
import { BebidaComponent } from './criar/bebida/bebida.component';
import { DoceComponent } from './criar/doce/doce.component';
import { SalgadoComponent } from './criar/salgado/salgado.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './criar/funcionario/funcionario.component';
import { BebidaUpdateComponent } from './update/bebida-update/bebida-update.component';
import { DoceUpdateComponent } from './update/doce-update/doce-update.component';
import { SalgadoUpdateComponent } from './update/salgado-update/salgado-update.component';
import { PedidoFuncionarioComponent } from './update/pedido-funcionario/pedido-funcionario.component';
import { BebidaService } from './services/bebida.service';
import { DoceService } from './services/doce.service';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosListaComponent,
    EntradaComponent,
    BebidaComponent,
    DoceComponent,
    SalgadoComponent,
    PedidosComponent,
    FuncionariosComponent,
    FuncionarioComponent,
    BebidaUpdateComponent,
    DoceUpdateComponent,
    SalgadoUpdateComponent,
    PedidoFuncionarioComponent,
    
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
