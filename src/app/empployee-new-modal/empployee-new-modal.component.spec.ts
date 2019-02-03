import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpployeeNewModalComponent } from './empployee-new-modal.component';

describe('EmpployeeNewModalComponent', () => {
  let component: EmpployeeNewModalComponent;
  let fixture: ComponentFixture<EmpployeeNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpployeeNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpployeeNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
