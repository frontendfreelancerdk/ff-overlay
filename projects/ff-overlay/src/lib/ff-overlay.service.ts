import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  OnDestroy,
  Renderer2,
  RendererFactory2
} from '@angular/core';
import {FFOverlayComponent} from './ff-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class FFOverlayService implements OnDestroy {
  private _overlay: any;
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private appendComponent(component: any, target?: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    if (target) {
      this.renderer.appendChild(target, domElem);
    } else {
      this.renderer.appendChild(document.body, domElem);
    }
    return {
      componentRef, destroy: () => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }
    };
  }

  public getOverlay() {
    if (!this._overlay) {
      this.init();
    }
    return this._overlay.componentRef.hostView.rootNodes[0];
  }

  public appendChild(domElement) {
    this.renderer.appendChild(this.getOverlay(), domElement);
  }

  public removeChild(domElement) {
    if (this.getOverlay().children.length === 1 && this.getOverlay().children[0] === domElement) {
      this.destroy();
    } else {
      this.renderer.removeChild(this.getOverlay(), domElement);
    }
  }

  public init(target?: any) {
    if (!this._overlay) {
      this._overlay = this.appendComponent(FFOverlayComponent, target);
    }
  }

  public destroy() {
    this._overlay && this._overlay.destroy();
    this._overlay = null;
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
