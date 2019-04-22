import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFOverlayModule} from 'ff-overlay';
import {ChildComponent} from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FFOverlayModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ChildComponent]
})
export class AppModule {
}
