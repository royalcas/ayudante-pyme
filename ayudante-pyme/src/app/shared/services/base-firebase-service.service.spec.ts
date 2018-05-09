import { TestBed, inject } from '@angular/core/testing';

import { BaseFirebaseServiceService } from './base-firebase-service.service';

describe('BaseFirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseFirebaseServiceService]
    });
  });

  it('should be created', inject([BaseFirebaseServiceService], (service: BaseFirebaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
