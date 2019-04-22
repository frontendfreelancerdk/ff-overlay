import {Component} from '@angular/core';

@Component({
  selector: 'ff-overlay',
  template: ``,
  styles: [`:host {
    pointer-events: none;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }

  :host /deep/ > * {
    pointer-events: auto;
  }`]
})
export class FFOverlayComponent {
}
