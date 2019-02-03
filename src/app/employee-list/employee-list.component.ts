import { Component, OnInit, ViewChild } from '@angular/core';
import  employees from '../employees';
import { Employee, EmployeeService } from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  showMessageSuccess;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  showNewModal(){
    this.employeeNewModal.show();
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
    console.log(employee);
  }
}
