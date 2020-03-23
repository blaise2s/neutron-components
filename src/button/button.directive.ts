import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[neutronButton]'
})
export class ButtonDirective {
  @HostBinding('style.font-size') fontSize = '1rem';
  @HostBinding('style.background-color') backgroundColor = '#17dbce';
  @HostBinding('style.color') color = '#000000';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.min-width') minWidth = '4rem';
  @HostBinding('style.max-width') maxWidth = '20rem';
  @HostBinding('style.min-height') minHeight = '2.5rem';
  @HostBinding('style.padding') padding = '0.5rem 1rem';

  @HostListener('focus')
  @HostListener('mouseenter')
  mouseenter(): void {
    this.backgroundColor = '#16cdc1';
  }

  @HostListener('blur')
  @HostListener('mouseleave')
  mouseleave(): void {
    this.backgroundColor = '#17dbce';
  }
  constructor() {}
}
