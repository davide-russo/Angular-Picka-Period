import { EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import {NgxPickaPeriodConfig} from '../models/ngx-picka-period-config.model';

@Directive()
export abstract class BasePickerComponent implements OnInit {
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() closePicker: EventEmitter<any> = new EventEmitter<any>();

  @Input() config: NgxPickaPeriodConfig;
  @Input() value: string;

  public abstract updateValue();
  protected abstract _setValue(value: string);

  ngOnInit() {
    this._setValue(this.value);
  }

  public onApply() {
    this.updateValue();
    this.closePicker.emit();
  }

  public onCancel() {
    this.closePicker.emit();
  }
}
