import { Livro } from './../../models/livro';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { LivrosService } from '../../services/livros.service';


@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.scss'
})
export class LivroFormComponent implements OnInit{

  form = this.formBuilder.group({
    _id: [Number(null)],
    name: [''],
    desc: ['']
  });



  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: LivrosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ){

      }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSucess(), error => this.onError())
    this.onCancel();
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this._snackBar.open('Livro criado com Sucesso!!', '', {duration: 3000})
  }

  private onError(){
    this._snackBar.open('Erro ao criar Livro!!', '', {duration: 3000})
  }

  ngOnInit(): void {
     const livro: Livro = this.route.snapshot.data['livro']
     this.form.setValue({
      _id: livro._id,
      name: livro.name,
      desc: livro.desc
     })
  }


}
