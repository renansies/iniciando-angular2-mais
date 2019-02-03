import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  @Input() 
  salaryColor;

  constructor(private element: ElementRef) { 
    setTimeout( () => {
      const nativeElement = this.element.nativeElement;
      nativeElement.style.color = this.salaryColor > 20000 ? 'green': 'red';
    }, 2000);
  }

}
