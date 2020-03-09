import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Moment} from 'moment';
import * as _moment from 'moment';

import {SETTINGS} from '../picker.settings';
import {NgxPickaPeriodConfig} from '../ngx-picka-period-config.model';
import {SLIDE_IN_FROM_TOP} from './animation';

const moment = _moment;

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss'],
  animations: [SLIDE_IN_FROM_TOP],
})
export class NgxPickaPeriodComponent implements OnInit, OnDestroy {
  public isOpen = false;
  public isStartDate = true;
  public incompleteRange = false;

  get activeValue(): Observable<string> { return this._activeValue.asObservable(); }
  private _activeValue: Subject<string> = new Subject<string>();

  public get close$(): Observable<any> { return this._close$.asObservable(); }
  private _close$: Subject<any> = new Subject<any>();

  public viewFrom: Moment;
  public viewTo: Moment;
  public range: Moment[];

  constructor(
    @Inject(SETTINGS.CONFIG_TOKEN) public config: NgxPickaPeriodConfig,
    @Inject(SETTINGS.VALUE_TOKEN) public value: string
    ) { }

  ngOnInit() {
    this.isOpen = true;
    this.setDates(this.value);
    console.log({config: this.config});
  }

  ngOnDestroy() {
    this.isOpen = false;
  }

  setDates(dateString: string) {
    const datesRange: string[] = dateString.split(SETTINGS.DATE_SEPARATOR);
    this.viewFrom = moment(datesRange[0], SETTINGS.DATE_FORMAT);
    this.viewTo = moment(this.viewFrom).add(1, 'month');
    this.range = [this.viewFrom, moment(datesRange[1], SETTINGS.DATE_FORMAT)];
  }

  public onRangeSelected(range: Moment[]) {
    this.range = range;
    this.changeViewByDay(this.range[0]);
    this.updateDate();
  }

  public onApply() {
    this.updateDate();
    this._close$.next();
  }

  public onCancel() {
    this._close$.next();
  }

  private _updatePeriod(period: string) {
    this._activeValue.next(period);
  }

  changeViewByDay(day: Moment) {
    this.viewFrom = moment(day);
    this.viewTo = moment(day).add(1, 'month');
  }

  changeViewByMonthsOffset(offset: number) {
    if (offset === -1) {
      this.viewFrom = moment(this.viewFrom).subtract(1, 'month');
      this.viewTo = moment(this.viewTo).subtract(1, 'month');
    } else {
      this.viewFrom =  moment(this.viewFrom).add(1, 'month');
      this.viewTo =  moment(this.viewTo).add(1, 'month');
    }
  }

  selectStartEndDay(day: Moment) {
    if (this.isStartDate === true ) {
      this.range[0] = day;
      this.isStartDate = false;
      this.range[1] = null;
    } else {
      if (day < moment(this.range[0])) {
        this.range[0] = day;
        this.isStartDate = false;
        this.range[1] = null;
      } else {
        this.range[1] = day;
        this.isStartDate = true;
      }
    }
    this.incompleteRange = !(this.range[0] && this.range[1]);
  }

  updateDate() {
    const fromDate = moment(this.range[0]).format(SETTINGS.DATE_FORMAT);
    const toDate = moment(this.range[1]).format(SETTINGS.DATE_FORMAT);
    this._updatePeriod(`${fromDate} - ${toDate}`);
  }
}
