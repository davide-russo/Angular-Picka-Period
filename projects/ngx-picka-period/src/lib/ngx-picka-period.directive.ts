import {Directive, ElementRef, Injectable, Injector, Input} from '@angular/core';
import {ConnectedPosition, Overlay, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {fromEvent} from 'rxjs';

import {SETTINGS} from './ngx-picka-period.settings';
import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';

@Injectable()
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
    const pickaPeriodPortal = new ComponentPortal(NgxPickaPeriodComponent, null, this._createPickerInjector(this.ngxPickaPeriodConfig));

    const overlayRef = this.overlay.create({
      height: SETTINGS.PICKER.HEIGHT,
      width: SETTINGS.PICKER.WIDTH,
      hasBackdrop: true,
      backdropClass: null,
      positionStrategy: this._createPositionStrategy()
    });

    overlayRef.attach(pickaPeriodPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  private _createPickerInjector(config: any): PortalInjector {
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
