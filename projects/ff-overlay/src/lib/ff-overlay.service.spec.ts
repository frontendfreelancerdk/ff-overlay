import {TestBed} from '@angular/core/testing';

import {FFOverlayService} from './ff-overlay.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FFOverlayComponent} from './ff-overlay.component';

describe('FFOverlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FFOverlayComponent]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [FFOverlayComponent]
      }
    });
  });

  it('should be created', () => {
    const service: FFOverlayService = TestBed.get(FFOverlayService);
    expect(service).toBeTruthy();
  });
});
