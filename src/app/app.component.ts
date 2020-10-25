import {Component, OnInit} from '@angular/core';
import * as _moment from 'moment';
import {SETTINGS} from '../../projects/ngx-picka-period/src/lib/picker.settings';

const moment = _moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'NGX Picka-Period Demo';
  public config = {test: 'test'};
  public themeColor: 'light-theme' | 'dark-theme' = 'light-theme';

  private readonly _from = moment().format(SETTINGS.DATE_FORMAT);
  private readonly _to = moment().add(1, 'month').format(SETTINGS.DATE_FORMAT);

  public periodValue = `${this._from} - ${this._to}`;
  public dateValue = `${this._from}`;

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(this.themeColor);
  }

  public themeSwitcher() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.themeColor);
    this.themeColor = (this.themeColor === 'light-theme') ? 'dark-theme' : 'light-theme';
    body.classList.add(this.themeColor);
  }
}
