import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FFOverlayComponent} from './ff-overlay.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('FFOverlayComponent', () => {
  let component: FFOverlayComponent;
  let fixture: ComponentFixture<FFOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FFOverlayComponent],
    })
      .compileComponents();

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [FFOverlayComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
