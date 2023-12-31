import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivroFormComponent } from './containers/livro-form/livro-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LivrosListComponent } from './components/livros-list/livros-list.component';





@NgModule({
  declarations: [
    LivrosComponent,
    LivroFormComponent,
    LivrosListComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LivrosModule { }
