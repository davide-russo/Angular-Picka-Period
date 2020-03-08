import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {SETTINGS} from '../ngx-picka-period.settings';

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss'],
  animations: [
    trigger('transform', [
      state('void',
        style({
          opacity: 0,
          transform: 'scale(0, 0)'
        })),
      transition('void => enter',
        animate('100ms cubic-bezier(0, 0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'scale(1, 1)'
          }))),
      transition('* => void',
        animate('100ms cubic-bezier(0, 0, 0.2, 1)',
          style({
            opacity: 0,
            transform: 'scale(0, 0)'
          })))
    ])
  ],
})
export class NgxPickaPeriodComponent implements OnInit, OnDestroy {
  public isOpen = false;

  constructor(@Inject(SETTINGS.CONFIG_TOKEN) public config: any) { }

  ngOnInit() {
    this.isOpen = true;
    console.log({config: this.config});
  }

  ngOnDestroy() {
    this.isOpen = false;
  }
}
