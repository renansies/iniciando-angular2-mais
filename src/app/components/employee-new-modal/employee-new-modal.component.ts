import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('inputName')
  inputName: ElementRef;

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private employeeService: EmployeeService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.onShow.subscribe(() => {
      console.log(this.inputName);
      this.inputName.nativeElement.focus();
    });
  }

  onClose(event) {
    console.log(event);
  }

  onOpen(event) {
    console.log(event);
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee)
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  
}
