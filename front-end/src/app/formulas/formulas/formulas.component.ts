import { FormulasService } from './../services/formulas.service';
import { Component, OnInit } from '@angular/core';
import { Formula } from '../models/formula';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrl: './formulas.component.scss'
})
export class FormulasComponent implements OnInit {
  formulas$: Observable <Formula[]>;

  // formulaServices: FormulasService;

  constructor(
      private formulaServices: FormulasService,
      public dialog: MatDialog
    ) {
    //this.formulaServices = new FormulasService();
    this.formulas$ = this.formulaServices.list()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar as Fórmulas')
        return of([])
      })
      )

    }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

    ngOnInit(): void {

    }
  }



