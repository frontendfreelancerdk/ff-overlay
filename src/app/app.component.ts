import {ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector} from '@angular/core';
import {FFOverlayService} from 'ff-overlay';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'ff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private service: FFOverlayService) {
    // Creating componentRef
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ChildComponent)
      .create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    // Getting HTML element (view)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    // Append html element to ff-overlay
    this.service.appendChild(domElem);
  }
}
