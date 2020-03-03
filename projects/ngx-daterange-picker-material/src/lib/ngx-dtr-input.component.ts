import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: 'input[ngxDtrPicker]',
    exportAs: 'DatepickerRangeInput'
})
export class NGXDatetimeRangePickerMaterial {
    public dateRangePicker: any;

    @HostListener('focus', ['$event.target'])
    onFocus() {
        this.dateRangePicker.show = true;
        this.dateRangePicker.setDates(this._el.nativeElement.value);
    }

    @Input()
    set ngxDtrPicker(value: any) {
        this.dateRangePicker = value;
        this.dateRangePicker
            .dateSubject
            .subscribe(res => {
                this._el.nativeElement.value = res;
            });
    }

    constructor(public _el: ElementRef) {}
}
