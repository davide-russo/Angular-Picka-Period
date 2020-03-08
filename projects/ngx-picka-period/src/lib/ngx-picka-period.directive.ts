import {ComponentRef, Directive, ElementRef, Injector, Input, OnDestroy} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {fromEvent, Subject} from 'rxjs';

import {SETTINGS} from './picker.settings';
import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';
import {takeUntil} from 'rxjs/operators';

@Directive({selector: 'input[ngxPickaPeriod]'})
export class NgxPickaPeriodDirective implements OnDestroy {
  @Input() ngxPickaPeriodConfig: any = {};

  private readonly _connectedPositions: ConnectedPosition[] = [{
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: 10
  }];

  private _pickerRef: ComponentRef<NgxPickaPeriodComponent>;
  private _destroy$: Subject<any> = new Subject();

  constructor(private elementRef: ElementRef,
              private injector: Injector,
              private overlay: Overlay) {
    fromEvent(elementRef.nativeElement, 'click')
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this._openPicker());
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _openPicker() {
    const pickerPortal = this._createPortal();
    const overlayRef = this._createOverlay();
    overlayRef.backdropClick()
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this._closeOverlay(overlayRef));
    this._pickerRef = overlayRef.attach(pickerPortal);
    this._pickerRef.instance.periodSelected$
      .pipe(takeUntil(this._destroy$))
      .subscribe((period: string) => this._updateElementValue(period));
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

  private _closeOverlay(overlayRef: OverlayRef) {
    overlayRef.dispose();
    this._pickerRef = null;
  }

  private _updateElementValue(value: any) {
    this.elementRef.nativeElement.value = value;
  }
}
