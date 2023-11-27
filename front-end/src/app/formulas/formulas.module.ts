import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormulasRoutingModule } from './formulas-routing.module';
import { FormulasComponent } from './formulas/formulas.component';





@NgModule({
  declarations: [
    FormulasComponent
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class FormulasModule { }
