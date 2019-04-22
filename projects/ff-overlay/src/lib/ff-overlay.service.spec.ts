import {TestBed} from '@angular/core/testing';

import {FFOverlayService} from './ff-overlay.service';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FFOverlayComponent} from './ff-overlay.component';

describe('FFOverlayService', () => {
  let service: FFOverlayService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FFOverlayComponent]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [FFOverlayComponent]
      }
    });
    service = TestBed.get(FFOverlayService);
  });
  afterEach(() => {
    service.ngOnDestroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create ff-overlay', () => {
    service.init();
    const elem = document.querySelector('ff-overlay');
    expect(elem).toBeTruthy();
  });

  it('method getOverlay should return ff-overlay element', () => {
    service.init();
    const elem = document.querySelector('ff-overlay');
    expect(service.getOverlay()).toEqual(elem);
  });

  it('method appendChild should append domElement to ff-overlay element', () => {
    const elem = document.createElement('test-component');
    service.appendChild(elem);
    expect(service.getOverlay().children[0]).toEqual(elem);
  });
  it('method removeChild should remove domElement from ff-overlay element', () => {
    const testComponent = document.createElement('test-component');
    const testComponent2 = document.createElement('test-component2');
    service.appendChild(testComponent);
    service.appendChild(testComponent2);
    expect(service.getOverlay().children[0]).toEqual(testComponent);
    expect(service.getOverlay().children[1]).toEqual(testComponent2);
    service.removeChild(testComponent);
    expect(service.getOverlay()).toBeTruthy();
    expect(service.getOverlay().children.length).toBe(1);
    expect(service.getOverlay().children[0]).toEqual(testComponent2);
  });

  it('method removeChild should remove ff-overlay element from dom, if it is empty', () => {
    const testComponent = document.createElement('test-component');
    service.appendChild(testComponent);
    expect(service.getOverlay().children[0]).toEqual(testComponent);
    service.removeChild(testComponent);
    expect(document.querySelector('ff-overlay')).toBe(null);
  });

  it('method init argument should append ff-overlay element to target instead of body', () => {
    const testComponent = document.createElement('test-component');
    document.body.appendChild(testComponent);
    service.init(testComponent);
    expect(service.getOverlay().parentElement).toEqual(testComponent);
  });
});
