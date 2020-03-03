import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import * as momentImported from 'moment';

const moment = momentImported;

@Component({
    selector: 'lib-ngx-dtr-calendar',
    template: `
    <table class="table-condensed">
        <thead>
            <tr>
                <th class="prev available" *ngIf="position=='left'"   (click)="nextMonth(-1)">
                    <span></span>
                </th>
                <th colspan="5" class="month">
                    {{monthName}} {{year}}
                </th>
                <th>
                </th>
                <th class="next available"  *ngIf="position=='right'" (click)="nextMonth(1)">
                    <span></span>
                </th>
            </tr>
            <tr>
                <th *ngFor="let week of locale.daysOfWeek" > {{week}} </th>
            </tr>
        </thead>
        <tr *ngFor="let row of calendar">
            <td class="week" *ngFor="let day of row" [attr.class]="getDayClasses(day)" (click)="selectDay(day)">
                {{day.date()}}
            </td>
        </tr>
    </table>
    `,
    styleUrls: ['./ngx-dtr-calendar.css']
})
export class NGXDtrCalendarComponent implements OnChanges {
    @Input() position;
    @Input() dates;
    @Input() range;
    @Output() changeMonth = new EventEmitter();
    @Output() selectStartEndDay = new EventEmitter();
    public year;
    public month;
    public hour;
    public minute;
    public second;
    public curDate;
    public  monthName;

    public locale = {
        format: moment.localeData().longDateFormat('L'),
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: moment.localeData().firstDayOfWeek()
    };
    public minDate = false;
    public calendar = [];

    ngOnChanges() {
        this.renderCalender();
    }
    nextMonth(event) {
        this.changeMonth.emit(event);
    }
    renderCalender() {
        this.month = this.dates.format('M') - 1;
        this.year = this.dates.format('YYYY');
        this.hour = this.dates.format('H');
        this.minute = 0;
        this.second = 0;
        const daysInMonth = moment([this.year, this.month]).daysInMonth();
        const firstDay = moment([this.year, this.month, 1]);
        const lastDay = moment([this.year, this.month, daysInMonth]);
        const lastMonth = moment(firstDay).subtract(1, 'month').month();
        const lastYear = moment(firstDay).subtract(1, 'month').year();
        const daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
        const dayOfWeek = firstDay.day();

        this.curDate = moment([this.year, this.month]);

        this.monthName = moment.months(this.curDate)[this.month];

        for (let i = 0; i < 6; i++) {
            this.calendar[i] = [];
        }
        let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }

        let curDate = moment([lastYear, lastMonth, startDay, 12, this.minute, this.second]);

        for (let i = 0, col = 0, row = 0; i < 42; i++ , col++ , curDate = moment(curDate).add(24, 'hour')) {
            if (i > 0 && col % 7 === 0) {
                col = 0;
                row++;
            }
            this.calendar[row][col] = curDate.clone().hour(this.hour).minute(this.minute).second(this.second);

        }
    }

    isToday(day) {
        return (day.isSame(new Date(), 'day')) ? true : false;
    }

    isoWeekday(day) {
        return (day.isoWeekday() > 5) ? false : false;
    }
    selectDay(day) {
        this.selectStartEndDay.emit(day);
    }

    // grey out the dates in other months displayed at beginning and end of this calendar
    notFromThisMonth(day) {
        return (day.month() !== this.month) ? true : false;
    }

    startDate(day) {
        return (day.isSame(this.range.from, 'day')) ? true : false;
    }

    endDate(day) {
        return (day.isSame(this.range.to, 'day')) ? true : false;
    }

    betweenDates(date) {
        if (date > moment(this.range.from) && date < moment(this.range.to)) {
           return true;
        }
    }

    getDayClasses(day) {
        const classes = [];
        if (this.isToday(day)) {
            classes.push('today');
        }
        if (this.isoWeekday(day)) {
            classes.push('weekend');
        }
        if (this.isoWeekday(day)) {
            classes.push('off');
        }
        if (this.notFromThisMonth(day)) {
            classes.push('off');
        }
        if (this.betweenDates(day)) {
            classes.push('in-range');
        }
        if (this.startDate(day)) {
            classes.push('active', 'start-date');
        }
        if (this.endDate(day)) {
            classes.push('active', 'end-date');
        }
        return classes.join(' ');
    }
}
