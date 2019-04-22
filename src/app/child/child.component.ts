import {Component, ElementRef, OnInit} from '@angular/core';
import {FFOverlayService} from 'ff-overlay';

@Component({
  selector: 'ff-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private service: FFOverlayService, private el: ElementRef) {
  }

  ngOnInit() {
  }

  close() {
    this.service.removeChild(this.el.nativeElement);
  }
}
