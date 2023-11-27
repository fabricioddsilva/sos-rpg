import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'livros' },
  { path: 'formulas',
  loadChildren: () => import('./formulas/formulas.module').then(m => m.FormulasModule)},
  { path: 'livros',
  loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
