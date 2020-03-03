import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as momentImported from 'moment'; const moment = momentImported;

@Component({
    selector: 'lib-ngx-dtr-picker',
    templateUrl: './datepicker.html',
    styleUrls: ['./datepicker.css']
})
export class NgxDtrPickerComponent implements OnInit {

    public dateSubject  = new Subject();
    public show = false;
    public fromSetting;
    public toSetting;
    public fromDateStart = true;

    public range: any = {
        from: new Date(),
        to: new Date()
    };
    public otherSettings;

    constructor() {
    }

    setDates(daterange) {
        const dates = daterange.split('-');
        this.fromSetting = moment(dates[0], 'MM/DD/YYYY' );
        this.range.from = this.fromSetting;
        this.range.to = moment(dates[1], 'MM/DD/YYYY' );
        this.toSetting = moment(this.fromSetting).add(1, 'M');
    }

    changeMonth(e) {
        if (e === -1) {
            this.fromSetting = moment(this.fromSetting).subtract(1, 'month');
            this.toSetting = moment(this.toSetting).subtract(1, 'month');
        } else {
            this.fromSetting =  moment(this.fromSetting).add(1, 'month');
            this.toSetting =  moment(this.toSetting).add(1, 'month');
        }
    }
    selectStartEndDay(day) {
        if (this.fromDateStart === true ) {
            this.range.from = day;
            this.fromDateStart = false;
            this.range.to = '';
        } else {
            if (day < moment(this.range.from)) {
                this.range.from = day;
                this.fromDateStart = false;
                this.range.to = '';
            } else {
                this.range.to = day;
                this.fromDateStart = true;
            }
        }
    }
    UpdateDate() {
        const fromFormated = moment(this.range.from).format('MM/DD/YYYY');
        const toFormated = moment(this.range.to).format('MM/DD/YYYY');
        this.dateSubject.next(fromFormated + '-' + toFormated);
        this.close();
    }
    setDefaultRange(type) {
        switch (type) {
            case 'today':
                this.range.from = moment();
                this.range.to = moment();
                this.UpdateDate();
            break;

            case 'yesterday':
                this.range.from = moment().add(-1, 'days');
                this.range.to = moment().add(-1, 'days');
                this.UpdateDate();
            break;

            case 'last7':
                this.range.from = moment().add(-7, 'days');
                this.range.to = moment();
                this.UpdateDate();
            break;

            case 'last30':
                this.range.from = moment().add(-30, 'days');
                this.range.to = moment();
                this.UpdateDate();
            break;

            case 'thismonth':
                this.range.from = moment().startOf('month');
                this.range.to = moment().endOf('month');
                this.UpdateDate();
            break;

            case 'lastmonth':
                this.range.from = moment().add(-1, 'month').startOf('month');
                this.range.to = moment().add(-1, 'month').endOf('month');
                this.UpdateDate();
            break;

            case 'custom':
            break;

        }
        console.log(this.range);
    }

    close() {
        this.show = false;
    }

    ngOnInit() { }
}
