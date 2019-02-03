import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private employeeService: EmployeeService, private element: ElementRef) { }

  ngOnInit() {
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(this.employee);
    this.onSubmit.emit(this.employee);
    this.hide();
  }

  private getDivModal(): HTMLElement {
    const nativeElement:HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
