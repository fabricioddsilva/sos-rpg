import { Injectable } from '@angular/core';
import { Formula } from '../models/formula';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  private readonly API = 'api/formulas'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Formula[]>(this.API)
    .pipe(
      first(),
      tap(formulas => console.log(formulas))
    );

  }
}
