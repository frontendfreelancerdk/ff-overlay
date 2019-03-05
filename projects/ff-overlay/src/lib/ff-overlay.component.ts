import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ff-overlay',
  template: ``,
  styles: [':host {pointer-events: none !important;display: block;position: fixed;top: 0;left: 0;z-index: 1000;width: 100%;height: 100%;}']
})
export class FFOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
