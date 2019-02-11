import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  constructor(private element: ElementRef) { 
  }

  @Input()
  set salaryColor(salary) {
    const nativeElement = this.element.nativeElement;
    nativeElement.style.color = salary > 20000 ? 'green': 'red';
  }
}
