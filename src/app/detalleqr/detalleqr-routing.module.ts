import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleqrPage } from './detalleqr.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleqrPageRoutingModule {}
