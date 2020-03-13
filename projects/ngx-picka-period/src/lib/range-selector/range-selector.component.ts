import {Component, EventEmitter, Output} from '@angular/core';
import * as _moment from 'moment';

import {MomentRange} from '../models/moment-range.model';
import {RangeOption} from '../models/range-option.model';

const moment = _moment;

@Component({
  selector: 'ngx-picka-period-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss']
})
export class RangeSelectorComponent {
  @Output() range: EventEmitter<MomentRange> = new EventEmitter<MomentRange>();

  public readonly rangeOptions: RangeOption[] = [
    {
      label: 'Today',
      action: () => this.range.emit({
        from: moment().startOf('day'),
        to: moment().endOf('day')
      })
    },
    {
      label: 'Yesterday',
      action: () => this.range.emit({
        from: moment().add(-1, 'days').startOf('day'),
        to: moment().add(-1, 'days').endOf('day')
      })
    },
    {
      label: 'Last 7 days',
      action: () => this.range.emit({
        from: moment().add(-7, 'days').startOf('day'),
        to: moment().endOf('day')
      })
    },
    {
      label: 'Last 30 days',
      action: () => this.range.emit({
        from: moment().add(-30, 'days').startOf('day'),
        to: moment().endOf('day')
      })
    },
    {
      label: 'This month',
      action: () => this.range.emit({
        from: moment().startOf('month'),
        to: moment().endOf('month')
      })
    },
    {
      label: 'Last month',
      action: () => this.range.emit({
        from: moment().add(-1, 'month').startOf('month'),
        to: moment().add(-1, 'month').endOf('month')
      })
    }
  ];

  constructor() { }
}
