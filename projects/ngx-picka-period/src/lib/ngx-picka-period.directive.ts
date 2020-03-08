import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {fromEvent} from 'rxjs';

import {SETTINGS} from './ngx-picka-period.settings';
import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';

@Directive({selector: 'input[ngxPickaPeriod]'})
export class NgxPickaPeriodDirective {
  @Input() ngxPickaPeriodConfig: any = {};

  private readonly _connectedPositions: ConnectedPosition[] = [{
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top'
  }];

  constructor(private elementRef: ElementRef,
              private injector: Injector,
              private overlay: Overlay) {
    fromEvent(elementRef.nativeElement, 'focus')
      .subscribe(() => this._openPicker());
  }

  private _openPicker() {
    const pickaPeriodPortal = this._createPortal();
    const overlayRef = this._createOverlay();
    overlayRef.attach(pickaPeriodPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  private _createPortal(): ComponentPortal<NgxPickaPeriodComponent> {
    return new ComponentPortal(NgxPickaPeriodComponent, null, this._createInjector(this.ngxPickaPeriodConfig));
  }

  private _createOverlay(): OverlayRef {
    return this.overlay.create({
      height: SETTINGS.PICKER.HEIGHT,
      width: SETTINGS.PICKER.WIDTH,
      hasBackdrop: true,
      backdropClass: null,
      positionStrategy: this._createPositionStrategy()
    });
  }

  private _createInjector(config: any): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(SETTINGS.CONFIG_TOKEN, config);
    return new PortalInjector(this.injector, injectorTokens);
  }

  private _createPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this._connectedPositions);
  }
}
