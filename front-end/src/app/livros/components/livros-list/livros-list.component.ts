import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.scss'
})
export class LivrosListComponent {

  @Input() livros: Livro[] = [];
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delete = new EventEmitter(false)

  onAdd(){
    this.add.emit(true)
  }

  onEdit(livro: Livro){
    this.edit.emit(livro)
  }

  onDelete(livro: Livro){
    this.delete.emit(livro)
  }

}
