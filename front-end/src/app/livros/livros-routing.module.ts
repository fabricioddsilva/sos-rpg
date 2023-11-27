import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivroFormComponent } from './containers/livro-form/livro-form.component';
import { livroResolver } from './guards/livro.resolver';



const routes: Routes = [
  { path: '', component: LivrosComponent},
  { path: 'new', component: LivroFormComponent, resolve: {livro: livroResolver}},
  { path: 'edit/:id', component: LivroFormComponent, resolve: {livro: livroResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
