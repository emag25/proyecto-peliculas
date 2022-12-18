/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataGenerosService } from './dataGeneros.service';

describe('Service: DataGeneros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGenerosService]
    });
  });

  it('should ...', inject([DataGenerosService], (service: DataGenerosService) => {
    expect(service).toBeTruthy();
  }));
});
