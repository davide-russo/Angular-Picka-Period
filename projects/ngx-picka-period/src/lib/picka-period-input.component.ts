import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: 'input[ngxPickaPeriod]',
    exportAs: 'PickaPeriodInput'
})
export class PickaPeriodInput {
    public dateRangePicker: any;

    @HostListener('focus', ['$event.target'])
    onFocus() {
        this.dateRangePicker.show = true;
        this.dateRangePicker.setDates(this._el.nativeElement.value);
    }

    @Input()
    set ngxPickaPeriod(value: any) {
        this.dateRangePicker = value;
        this.dateRangePicker
            .dateSubject
            .subscribe(res => {
                this._el.nativeElement.value = res;
            });
    }

    constructor(public _el: ElementRef) {}
}
