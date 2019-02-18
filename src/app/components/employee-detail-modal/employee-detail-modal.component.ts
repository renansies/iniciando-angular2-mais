import { Component, OnInit, Input } from '@angular/core';
import { Modalable } from '../modal/modalable';
import { Employee } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-detail-modal',
  templateUrl: './employee-detail-modal.component.html',
  styleUrls: []
})
export class EmployeeDetailModalComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee;

  constructor() {
    super();
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
