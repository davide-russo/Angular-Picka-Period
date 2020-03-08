import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';
import {Observable, Subject} from 'rxjs';
import {Moment} from 'moment';

import {SETTINGS} from '../picker.settings';

@Component({
  selector: 'ngx-picka-period',
  templateUrl: './ngx-picka-period.component.html',
  styleUrls: ['./ngx-picka-period.component.scss'],
  animations: [
    trigger('slideInFromTop', [
      state('void', style({
        opacity: 0,
        transform: 'translate(0, -50px)'
      })),
      transition('void => enter', [group([
          animate('1ms ease-in-out', style({
            transform: 'translate(0, -50px)',
          })),
          animate('100ms ease-in-out', style({
            opacity: 1
          })),
          animate('200ms ease-in-out', style({
            transform: 'translate(0, 0)',
          }))
        ]
      )])
    ])
  ],
})
export class NgxPickaPeriodComponent implements OnInit, OnDestroy {
  public isOpen = false;

  get activePeriod$(): Observable<string> { return this._activePeriod$.asObservable(); }
  private _activePeriod$: Subject<string> = new Subject<string>();

  public get close$(): Observable<any> { return this._close$.asObservable(); }
  private _close$: Subject<any> = new Subject<any>();

  public set period(period: Moment[]) { this._period = period; }
  public get period(): Moment[] { return this._period; }
  private _period: Moment[];

  constructor(@Inject(SETTINGS.CONFIG_TOKEN) public config: any) { }

  ngOnInit() {
    this.isOpen = true;
    console.log({config: this.config});
  }

  ngOnDestroy() {
    this.isOpen = false;
  }

  public onRangeSelected(range: Moment[]) {
    console.log(range.map(date => date.toString()));
  }

  public onApply() {}

  public onCancel() {
    this._close$.next();
  }

  private _updatePeriod(period: string) {
    this._activePeriod$.next(period);
  }
}
