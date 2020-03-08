import {Component, EventEmitter, Output} from '@angular/core';
import * as _moment from 'moment';
import {Moment} from 'moment';

const moment = _moment;

interface RangeOption {
  label: string;
  action: any;
}

@Component({
  selector: 'ngx-picka-period-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss']
})
export class RangeSelectorComponent {
  @Output() range: EventEmitter<Moment[]> = new EventEmitter<Moment[]>();

  public readonly rangeOptions: RangeOption[] = [
    {
      label: 'Today',
      action: () => this.range.emit([
        moment().startOf('day'),
        moment().endOf('day')
      ])
    },
    {
      label: 'Yesterday',
      action: () => this.range.emit([
        moment().add(-1, 'days').startOf('day'),
        moment().add(-1, 'days').endOf('day')
      ])
    },
    {
      label: 'Last 7 days',
      action: () => this.range.emit([
        moment().add(-7, 'days').startOf('day'),
        moment().endOf('day')
      ])
    },
    {
      label: 'Last 30 days',
      action: () => this.range.emit([
        moment().add(-30, 'days').startOf('day'),
        moment().endOf('day')
      ])
    },
    {
      label: 'This month',
      action: () => this.range.emit([
        moment().startOf('month'),
        moment().endOf('month')
      ])
    },
    {
      label: 'Last month',
      action: () => this.range.emit([
        moment().add(-1, 'month').startOf('month'),
        moment().add(-1, 'month').endOf('month')
      ])
    }
  ];

  constructor() { }
}
