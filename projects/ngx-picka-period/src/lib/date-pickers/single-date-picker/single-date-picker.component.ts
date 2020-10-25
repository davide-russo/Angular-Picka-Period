import {Component, OnInit, ViewChild} from '@angular/core';
import {BasePickerComponent} from '../base-picker.component';
import {CalendarComponent} from '../../calendar/calendar.component';
import {TimeSelectorComponent} from '../../time-selector/time-selector.component';
import {Moment} from 'moment';
import * as _moment from 'moment';
import {SETTINGS} from '../../picker.settings';

const moment = _moment;

@Component({
  selector: 'ngx-picka-period-single-date-picker',
  templateUrl: './single-date-picker.component.html',
  styleUrls: ['./single-date-picker.component.scss']
})
export class SingleDatePickerComponent extends BasePickerComponent implements OnInit {
  @ViewChild('calendar', {static: false}) dayFrom: CalendarComponent;
  @ViewChild('time', {static: false}) timeFrom: TimeSelectorComponent;

  public calendarView: Moment;
  public date: Moment;
  private _time: Moment;

  public updateValue() {
    const date = moment(this.date).format(SETTINGS.DATE_FORMAT);
    this.valueChange.emit(`${date}`);
  }

  public changeViewByMonthsOffset(offset: number) {
    if (offset === -1) {
      this.calendarView = moment(this.calendarView).subtract(1, 'month');
    } else {
      this.calendarView = moment(this.calendarView).add(1, 'month');
    }
  }

  public onSelectDay(day: Moment) {
    this.date = day.hours(this._time.hours()).minutes(this._time.minutes());
  }

  public onSelectTime(time: Moment) {
    this._time = time;
    this.date = time;
  }

  protected _setValue(value: string) {
    this.calendarView = moment(value, SETTINGS.DATE_FORMAT);
    this.date = this.calendarView;
    this._time = this.date;
  }
}
