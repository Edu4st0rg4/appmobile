import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'crearuser',
    loadChildren: () => import('./crearuser/crearuser.module').then( m => m.CrearuserPageModule)
  },
  {
    path: 'cambiarcontra',
    loadChildren: () => import('./cambiarcontra/cambiarcontra.module').then( m => m.CambiarcontraPageModule)
  },
  {
    path: 'inicio/',//:user',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'profesor/',//:user',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule)
  },
  {
    path: 'detalleqr/',//:clases_inscrita',
    loadChildren: () => import('./detalleqr/detalleqr.module').then( m => m.DetalleqrPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
