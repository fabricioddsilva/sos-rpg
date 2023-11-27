import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Livro } from '../../models/livro';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  livros$: Observable<Livro[]> | null = null;

  constructor(
    private livrosServices: LivrosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar

    )

    {
      this.refresh()
    }

    refresh(){
      this.livros$ = this.livrosServices.list()
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

      onAdd(){
        this.router.navigate(['new'], {relativeTo: this.route})
      }

      onEdit(livro: Livro){

        this.router.navigate(['edit', livro._id], {relativeTo: this.route})
      }

      onDelete(livro: Livro){
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          data: 'Tem certeza que dejesa remover esse livro?',
        });

        dialogRef.afterClosed().subscribe((result: boolean) => {
          if (result) {

            this.livrosServices.delete(livro._id).subscribe(
              () => {
                this.refresh()
                this._snackBar.open('Livro removido com Sucesso!!', 'X',
                {
                  duration: 3000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center'
                })
              },
              () => this.onError('Erro ao Remover o Livro')
              )
            }
          });
        }


      }



