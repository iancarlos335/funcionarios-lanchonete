import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [
  {path:"produtos", component: ProdutosListaComponent},
  {path:"produtos/adicionar", component: CriarProdutoComponent},
  {path:"home", component: EntradaComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
