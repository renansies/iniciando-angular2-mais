import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  showMessageSuccess = false;
  employeeToEdit: Employee;
  employeeToDelete: Employee;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  showNewModal(){
    this.employeeNewModal.show();
  }

  showEditModal(employee: Employee){
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  showDeleteModal(employee: Employee){
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onDeleteEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }
}
