import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import * as _moment from 'moment';
import {Moment} from 'moment';

import {SLIDE_IN_FROM_TOP} from './ngx-picka-period.animation';
import {SETTINGS} from '../picker.settings';
import {NgxPickaPeriodConfig} from '../ngx-picka-period-config.model';
import {TimeSelectorComponent} from '../time-selector/time-selector.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {MomentRange} from '../models/moment-range.model';

const moment = _moment;

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss'],
  animations: [SLIDE_IN_FROM_TOP],
})
export class NgxPickaPeriodComponent implements OnInit, OnDestroy {
  @ViewChild('dayFrom', {static: false}) dayFrom: CalendarComponent;
  @ViewChild('dayTo', {static: false}) dayTo: CalendarComponent;
  @ViewChild('timeFrom', {static: false}) timeFrom: TimeSelectorComponent;
  @ViewChild('timeTo', {static: false}) timeTo: TimeSelectorComponent;

  public isOpen = false;
  public isStartDate = true;
  public incompleteRange = false;
  public calendarViewFrom: Moment;
  public calendarViewTo: Moment;
  public period: MomentRange;

  public get activeValue$(): Observable<string> { return this._activeValue$.asObservable(); }
  private _activeValue$: Subject<string> = new Subject<string>();

  public get close$(): Observable<any> { return this._close$.asObservable(); }
  private _close$: Subject<any> = new Subject<any>();

  private _fromTime: Moment;
  private _toTime: Moment;

  constructor(
    @Inject(SETTINGS.CONFIG_TOKEN) public config: NgxPickaPeriodConfig,
    @Inject(SETTINGS.PERIOD_TOKEN) public value: string
  ) {
  }

  ngOnInit() {
    this.isOpen = true;
    this._setDates(this.value);
  }

  ngOnDestroy() {
    this.isOpen = false;
  }

  public onRangeSelected(range: MomentRange) {
    this.period = range;
    this.changeViewByDay(this.period.from);
    this.updatePeriod();
  }

  public changeViewByDay(day: Moment) {
    this.calendarViewFrom = moment(day);
    this.calendarViewTo = moment(day).add(1, 'month');
  }

  public changeViewByMonthsOffset(offset: number) {
    if (offset === -1) {
      this.calendarViewFrom = moment(this.calendarViewFrom).subtract(1, 'month');
      this.calendarViewTo = moment(this.calendarViewTo).subtract(1, 'month');
    } else {
      this.calendarViewFrom = moment(this.calendarViewFrom).add(1, 'month');
      this.calendarViewTo = moment(this.calendarViewTo).add(1, 'month');
    }
  }

  public onSelectDay(day: Moment) {
    const from = day.hours(this._fromTime.hours()).minutes(this._fromTime.minutes());
    const to = day.hours(this._toTime.hours()).minutes(this._toTime.minutes());
    if (this.isStartDate) {
      this.isStartDate = false;
      this.period = {from, to: null};
    } else {
      if (day < this.period.from) {
        this.isStartDate = false;
        this.period = {from, to: null};
      } else {
        this.isStartDate = true;
        this.period = {...this.period, to};
      }
    }
    this.incompleteRange = !(this.period.from && this.period.to);
  }

  public onSelectTime(time: Moment, position: 'from' | 'to') {
    if (position === 'from') {
      const from = time > this.period.to ? this.period.to.clone() : time;
      this._fromTime = from;
      this.period = {...this.period, from};
    } else if (position === 'to') {
      const to = this.period.from > time ? this.period.from.clone() : time;
      this._toTime = to;
      this.period = {...this.period, to};
    }
  }

  public updatePeriod() {
    const fromDate = moment(this.period.from).format(SETTINGS.DATE_FORMAT);
    const toDate = moment(this.period.to).format(SETTINGS.DATE_FORMAT);
    this._updatePeriod(`${fromDate} - ${toDate}`);
  }

  public onApply() {
    this.updatePeriod();
    this._close$.next();
  }

  public onCancel() {
    this._close$.next();
  }

  private _setDates(dateString: string) {
    const dateStringRange: string[] = dateString.split(SETTINGS.DATE_SEPARATOR);
    this.calendarViewFrom = moment(dateStringRange[0], SETTINGS.DATE_FORMAT);
    this.calendarViewTo = moment(this.calendarViewFrom).add(1, 'month');
    this.period = {
      from: moment(dateStringRange[0], SETTINGS.DATE_FORMAT),
      to: moment(dateStringRange[1], SETTINGS.DATE_FORMAT)
    };
    this._fromTime = this.period.from;
    this._toTime = this.period.to;
  }

  private _updatePeriod(period: string) {
    this._activeValue$.next(period);
  }
}
