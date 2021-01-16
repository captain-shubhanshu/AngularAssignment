import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  showBgColor = false;

  constructor() {}

  @HostBinding('style.backgroundColor')
  get bgColor() {
    if (this.showBgColor) return 'yellow';
    return '';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.showBgColor = !this.showBgColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.showBgColor = !this.showBgColor;
  }
}
