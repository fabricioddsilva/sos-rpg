import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { livroResolver } from './livro.resolver';
import { Livro } from '../models/livro';

describe('livroResolver', () => {
  const executeResolver: ResolveFn<Livro> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => livroResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
