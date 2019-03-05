import {ModuleWithProviders, NgModule} from '@angular/core';
import {FFOverlayComponent} from './ff-overlay.component';
import {FFOverlayService} from './ff-overlay.service';

@NgModule({
  declarations: [FFOverlayComponent],
  imports: [],
  exports: [],
  entryComponents: [FFOverlayComponent]
})
export class FFOverlayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FFOverlayModule,
      providers: [FFOverlayService]
    };
  }
}
