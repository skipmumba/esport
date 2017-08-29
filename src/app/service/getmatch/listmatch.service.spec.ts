import { TestBed, inject } from '@angular/core/testing';

import { ListmatchService } from './listmatch.service';

describe('ListmatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListmatchService]
    });
  });

  it('should be created', inject([ListmatchService], (service: ListmatchService) => {
    expect(service).toBeTruthy();
  }));
});
