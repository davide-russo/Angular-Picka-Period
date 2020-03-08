import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ngx-picka-period-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() apply: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
