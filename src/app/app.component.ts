import { Component } from '@angular/core';
import * as _moment from 'moment';
import {SETTINGS} from '../../projects/ngx-picka-period/src/lib/picker.settings';

const moment = _moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'NGX Picka-Period Demo';
  public config = {test: 'test'};
  public value =
    `${moment().format(SETTINGS.DATE_FORMAT)} -
 ${moment().add(1, 'month').format(SETTINGS.DATE_FORMAT)}`;
}
