import { TestBed } from '@angular/core/testing';

import { SalgadoService } from './salgado.service';

describe('SalgadoService', () => {
  let service: SalgadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
