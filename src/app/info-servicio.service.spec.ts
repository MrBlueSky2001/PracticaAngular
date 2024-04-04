import { TestBed } from '@angular/core/testing';

import { InfoServicioService } from './info-servicio.service';

describe('InfoServicioService', () => {
  let service: InfoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
