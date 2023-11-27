import { Livro } from './../models/livro';
import { tap, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'api/livros'

  constructor(
    private httpClient: HttpClient,

    ) {
  }

  list(){
    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      tap(formulas => console.log(formulas))
      )
    }

  loadById(id: number){
    return this.httpClient.get<Livro>(`${this.API}/${id}`)
  }

  save(livro: Partial<Livro>){
    if(livro._id){
      return this.update(livro)
    }
    return this.create(livro)
  }

  delete(id: number){
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(first());
  }

  private create(livro: Partial<Livro>){
    return this.httpClient.post<Livro>(this.API, livro)
    .pipe(first());
  }

  private update(livro: Partial<Livro>){
    return this.httpClient.put<Livro>(`${this.API}/${livro._id}`, livro)
    .pipe(first());
  }


}


