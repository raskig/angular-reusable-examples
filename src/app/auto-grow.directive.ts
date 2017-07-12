import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    onFocus() {
        console.log(this.el.nativeElement);
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '2000px');

    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '1200px');
    }
}
