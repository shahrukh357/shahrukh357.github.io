import { TestBed, inject } from '@angular/core/testing';

import { GotHttpservice } from './got-http.service';

describe('GameHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotHttpservice]
    });
  });

  it('should be created', inject([GotHttpservice], (service: GotHttpservice) => {
    expect(service).toBeTruthy();
  }));
});
