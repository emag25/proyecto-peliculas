/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataPeliculasService } from './dataPeliculas.service';

describe('Service: DataPeliculas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPeliculasService]
    });
  });

  it('should ...', inject([DataPeliculasService], (service: DataPeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
