import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Moment} from 'moment';
import * as _moment from 'moment';
import {DayClassesCheck} from '../models/day-classes-check.model';
import {MomentRange} from '../models/moment-range.model';

const moment = _moment;

export type CalendarPosition = 'from' | 'to' | null;

@Component({
  selector: 'ngx-picka-period-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
  @Output() changeMonth = new EventEmitter();
  @Output() selectDay = new EventEmitter();

  @Input() position: CalendarPosition;
  @Input() period: MomentRange;
  @Input() date: Moment;
  @Input() calendarView: Moment;
  @Input() isStartDate: boolean;

  public daysOfWeek = moment.weekdaysMin();
  public calendar: Moment[][] = [];
  public hoverDay: Moment;
  public monthName: string;
  public year: number;

  private _month: number;
  private _hour: number;
  private _minute: number;
  private _second: number;

  private readonly _dayClassesChecks: DayClassesCheck[] = [
    {
      classes: ['before-month'],
      check: (day: Moment) => day.month() < this.calendarView.month()
    },
    {
      classes: ['after-month'],
      check: (day: Moment) => day.month() > this.calendarView.month()
    },
    {
      classes: ['already-selected-start'],
      check: (day: Moment) => this.period &&
                              day.isSame(this.period.from, 'day')
    },
    {
      classes: ['already-selected-end'],
      check: (day: Moment) => this.period &&
                              day.isSame(this.period.to, 'day')
    },
    {
      classes: ['start-date'],
      check: (day: Moment) => this.period &&
                              day.isSame(this.period.from, 'day') &&
                              day.isSame(this.calendarView, 'month')
    },
    {
      classes: ['end-date'],
      check: (day: Moment) => this.period &&
                              day.isSame(this.period.to, 'day') &&
                              day.isSame(this.calendarView, 'month')
    },
    {
      classes: ['start-week'],
      check: (day: Moment) => day.isSame(day.clone().startOf('week'), 'day')
    },
    {
      classes: ['end-week'],
      check: (day: Moment) => day.isSame(day.clone().endOf('week'), 'day')
    },
    {
      classes: ['is-hover'],
      check: (day: Moment, isHover: boolean) => isHover
    },
    {
      classes: ['today'],
      check: (day: Moment) => day.isSame(new Date(), 'day')
    },
    {
      classes: ['in-range'],
      check: (day: Moment) => this.period &&
                              day.isSameOrAfter(this.period.from, 'day') &&
                              day.isSameOrBefore(this.period.to, 'day') &&
                              !this.period.from.isSame(this.period.to, 'day')
    },
    {
      classes: ['selected-date'],
      check: (day: Moment) => this.date &&
                              day.isSame(this.date, 'day')
    }
  ];

  ngOnChanges() {
    this._renderCalendar();
  }

  public getDayClasses(day: Moment, isHover: boolean): string {
    let classes: string[] = ['calendar-day-wrapper'];
    this._dayClassesChecks.forEach((dayCheck: DayClassesCheck) => {
      if (dayCheck.check(day, isHover)) {
        classes = [...classes, ...dayCheck.classes];
      }
    });
    return classes.join(' ');
  }

  private _renderCalendar() {
    this.year = +this.calendarView.format('YYYY');
    this._month = +this.calendarView.format('MM') - 1;
    this._hour = +this.calendarView.format('HH');
    this._minute = +this.calendarView.format('mm');
    this._second = 0;
    this.monthName = moment.months(this.calendarView as any)[this._month];

    const firstDayLocale = moment.localeData().firstDayOfWeek();
    const firstDay = moment([this.year, this._month, 1]);
    const lastMonth = moment(firstDay).subtract(1, 'month').month();
    const lastYear = moment(firstDay).subtract(1, 'month').year();
    const daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
    const dayOfWeek = firstDay.day();

    for (let i = 0; i < 6; i++) {
      this.calendar[i] = [];
    }
    let startDay = daysInLastMonth - dayOfWeek + firstDayLocale + 1;
    if (startDay > daysInLastMonth) {
      startDay -= 7;
    }
    if (dayOfWeek === firstDayLocale) {
      startDay = daysInLastMonth - 6;
    }
    let curDate = moment([lastYear, lastMonth, startDay, 12, this._minute, this._second]);
    for (let i = 0, col = 0, row = 0; i < 42; i++ , col++ , curDate = moment(curDate).add(24, 'hour')) {
      if (i > 0 && col % 7 === 0) {
        col = 0;
        row++;
      }
      this.calendar[row][col] = curDate.clone().hour(this._hour).minute(this._minute).second(this._second);
    }
  }
}
