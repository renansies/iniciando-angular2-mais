import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { ModalComponent } from '../modal/modal.component';
import { Modalable } from '../modal/modalable';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: []
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private employeeService: EmployeeService) {
    super();
  }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee)
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  
}
