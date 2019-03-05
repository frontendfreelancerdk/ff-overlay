import { TestBed } from '@angular/core/testing';

import { FFOverlayService } from './ff-overlay.service';

describe('FFOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FFOverlayService = TestBed.get(FFOverlayService);
    expect(service).toBeTruthy();
  });
});
