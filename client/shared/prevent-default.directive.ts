import { Directive, Input } from '@angular/core';


@Directive({
  selector : '[href]',
  host : {
    '(click)' : 'preventDefault($event)'
  }
})
export class PreventDefaultDirective {

  @Input() href;

  preventDefault(event) {
    if(this.href == '#') event.preventDefault();
  }
}