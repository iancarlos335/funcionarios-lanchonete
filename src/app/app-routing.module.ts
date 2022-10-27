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
import { BebidaUpdateComponent } from './update/bebida-update/bebida-update.component';
import { DoceUpdateComponent } from './update/doce-update/doce-update.component';
import { SalgadoUpdateComponent } from './update/salgado-update/salgado-update.component';

const routes: Routes = [
  {path:"produtos", component: ProdutosListaComponent},
  {path:"bebida", component: BebidaComponent},
  {path:"bebidaUpdate/:id", component: BebidaUpdateComponent},
  {path:"doce", component: DoceComponent},
  {path:"doceUpdate/:id", component: DoceUpdateComponent},
  {path:"salgado", component: SalgadoComponent},
  {path:"salgadoUpdate/:id", component: SalgadoUpdateComponent},
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
