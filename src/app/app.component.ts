import { Component } from '@angular/core';
import {FFOverlayService} from 'ff-overlay';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ff-overlay-app';
  constructor(private service: FFOverlayService){
    console.log(this.service.getOverlay());
  }
}
