import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FFOverlayModule} from 'ff-overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FFOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
