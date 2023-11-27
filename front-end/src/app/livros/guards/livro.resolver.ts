import { ResolveFn } from '@angular/router';
import { LivrosService } from '../services/livros.service';
import { inject } from '@angular/core';
import { Livro } from '../models/livro';
import { of } from 'rxjs';

export const livroResolver: ResolveFn<Livro> = (route, state, service: LivrosService = inject (LivrosService)
) => {

  if(route.params?.['id']){
    return service.loadById(route.params['id'])
  }

  return of ({_id: Number(null), name: '', desc: ''});
};
