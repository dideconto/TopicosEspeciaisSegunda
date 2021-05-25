import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/listar/listar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Rota para listar os ciclos de pagamento
    path : '',
    component: ListarComponent
  },
  {
    //Rota para cadastrar os ciclos de pagamento
    path : 'ciclo/cadastrar',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
