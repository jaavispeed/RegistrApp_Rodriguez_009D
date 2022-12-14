import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaralumnoPage } from './agregaralumno.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaralumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaralumnoPageRoutingModule {}
