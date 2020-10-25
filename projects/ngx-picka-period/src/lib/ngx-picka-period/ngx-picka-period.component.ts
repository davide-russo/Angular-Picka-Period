import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NgxPickaPeriodConfig} from '../models/ngx-picka-period-config.model';
import {SLIDE_IN_FROM_TOP} from './ngx-picka-period.animation';
import {SETTINGS} from '../picker.settings';

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss'],
  animations: [SLIDE_IN_FROM_TOP]
})
export class NgxPickaPeriodComponent implements OnInit, OnDestroy {
  public get activeValue$(): Observable<string> { return this._activeValue$.asObservable(); }
  private _activeValue$: Subject<string> = new Subject<string>();

  public get close$(): Observable<any> { return this._close$.asObservable(); }
  private _close$: Subject<any> = new Subject<any>();

  public isOpen: boolean;

  constructor(
    @Inject(SETTINGS.CONFIG_TOKEN) public config: NgxPickaPeriodConfig,
    @Inject(SETTINGS.PERIOD_TOKEN) public value: string,
    @Inject(SETTINGS.RANGE_SELECTION_TOKEN) public isRangeSelection: boolean
  ) {}

  ngOnInit() {
    this.isOpen = true;
  }

  ngOnDestroy() {
    this.isOpen = false;
  }

  public updateValue(value: string) {
    this._activeValue$.next(value);
  }

  public closePicker() {
    this._close$.next();
  }
}
