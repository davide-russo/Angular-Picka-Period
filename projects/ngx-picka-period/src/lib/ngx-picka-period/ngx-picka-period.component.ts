import {Component, Inject, OnInit} from '@angular/core';

import {SETTINGS} from '../ngx-picka-period.settings';

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss']
})
export class NgxPickaPeriodComponent implements OnInit {
  constructor(@Inject(SETTINGS.CONFIG_TOKEN) public config: any) { }

  ngOnInit() {
    console.log({config: this.config});
  }
}
