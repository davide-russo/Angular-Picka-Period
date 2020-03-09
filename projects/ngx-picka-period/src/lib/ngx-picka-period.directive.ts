import {ComponentRef, Directive, ElementRef, HostBinding, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {fromEvent, Subject} from 'rxjs';

import {SETTINGS} from './picker.settings';
import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';
import {takeUntil} from 'rxjs/operators';
import {NgxPickaPeriodConfig} from './ngx-picka-period-config.model';

@Directive({selector: '[ngxPickaPeriod]'})
export class NgxPickaPeriodDirective implements OnInit, OnDestroy {
  @Input() ngxPickaPeriodConfig: any = {};

  @HostBinding('readonly') readonly = true;

  private readonly _connectedPositions: ConnectedPosition[] = [{
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: SETTINGS.PICKER.OFFSET
  }];

  private _portalRef: ComponentPortal<NgxPickaPeriodComponent>;
  private _pickerRef: ComponentRef<NgxPickaPeriodComponent>;
  private _overlayRef: OverlayRef;
  private _value: string;
  private _destroy$: Subject<any> = new Subject();

  constructor(private elementRef: ElementRef,
              private injector: Injector,
              private overlay: Overlay) {
  }

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this._openPicker());
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _openPicker() {
    this._value = this.elementRef.nativeElement.value;
    this._portalRef = this._createPortal();
    this._overlayRef = this._createOverlay();
    this._pickerRef = this._overlayRef.attach(this._portalRef);

    this._overlayRef.backdropClick()
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this._closeOverlay());

    this._pickerRef.instance.activeValue
      .pipe(takeUntil(this._destroy$))
      .subscribe((period: string) => this._updateElementValue(period));

    this._pickerRef.instance.close$
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this._closeOverlay());
  }

  private _createPortal(): ComponentPortal<NgxPickaPeriodComponent> {
    return new ComponentPortal(
      NgxPickaPeriodComponent,
      null,
      this._createPickerInjector(this.ngxPickaPeriodConfig, this._value)
    );
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

  private _createPickerInjector(config: NgxPickaPeriodConfig, value: string): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(SETTINGS.CONFIG_TOKEN, config);
    injectorTokens.set(SETTINGS.VALUE_TOKEN, value);
    return new PortalInjector(this.injector, injectorTokens);
  }

  private _createPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this._connectedPositions);
  }

  private _closeOverlay() {
    this._overlayRef.dispose();
    this._overlayRef = null;
    this._pickerRef = null;
    this._portalRef = null;
  }

  private _updateElementValue(value: any) {
    console.log(value);
    this.elementRef.nativeElement.value = value;
  }
}
