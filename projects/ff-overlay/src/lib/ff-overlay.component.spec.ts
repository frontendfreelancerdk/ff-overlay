import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFOverlayComponent } from './ff-overlay.component';

describe('FFOverlayComponent', () => {
  let component: FFOverlayComponent;
  let fixture: ComponentFixture<FFOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFOverlayComponent ]
    })
    .compileComponents();
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
