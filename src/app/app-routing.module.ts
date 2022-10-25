import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidaComponent } from './criar/bebida/bebida.component';
import { DoceComponent } from './criar/doce/doce.component';
import { SalgadoComponent } from './criar/salgado/salgado.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [
  {path:"produtos", component: ProdutosListaComponent},
  {path:"produtos/bebida", component: BebidaComponent},
  {path:"produtos/doce", component: DoceComponent},
  {path:"produtos/salgado", component: SalgadoComponent},
  {path:"home", component: EntradaComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
