import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: []
})
export class EmployeeNewComponent implements OnInit {

  employee = {
    name,
    salary: 0,
    bonus: 0,
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee)
    this.employeeService.addEmployee(copy);
  }
}
