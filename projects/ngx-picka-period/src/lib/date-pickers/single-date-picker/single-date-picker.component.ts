import { Component, OnInit } from '@angular/core';
import {BasePickerComponent} from '../base-picker.component';

@Component({
  selector: 'ngx-picka-period-single-date-picker',
  templateUrl: './single-date-picker.component.html',
  styleUrls: ['./single-date-picker.component.scss']
})
export class SingleDatePickerComponent extends BasePickerComponent implements OnInit {
  ngOnInit() {
  }
}
