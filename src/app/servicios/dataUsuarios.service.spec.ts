/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataUsuariosService } from './dataUsuarios.service';

describe('Service: DataClientes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUsuariosService]
    });
  });

  it('should ...', inject([DataUsuariosService], (service: DataUsuariosService) => {
    expect(service).toBeTruthy();
  }));
});
