import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidaComponent } from './criar/bebida/bebida.component';
import { DoceComponent } from './criar/doce/doce.component';
import { FuncionarioComponent } from './criar/funcionario/funcionario.component';
import { SalgadoComponent } from './criar/salgado/salgado.component';
import { EntradaComponent } from './entrada/entrada.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [
  {path:"produtos", component: ProdutosListaComponent},
  {path:"bebida", component: BebidaComponent},
  {path:"doce", component: DoceComponent},
  {path:"salgado", component: SalgadoComponent},
  {path:"home", component: EntradaComponent},
  {path:"pedidos", component: PedidosComponent},
  {path:"funcionarios", component: FuncionariosComponent},
  {path:"adicionarFuncionario", component: FuncionarioComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
