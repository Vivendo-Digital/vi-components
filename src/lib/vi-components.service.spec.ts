import { TestBed } from '@angular/core/testing';

import { ViComponentsService } from './vi-components.service';

describe('ViComponentsService', () => {
  let service: ViComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
