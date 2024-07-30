import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEmployeeComponent } from './check-employee.component';

describe('CheckEmployeeComponent', () => {
  let component: CheckEmployeeComponent;
  let fixture: ComponentFixture<CheckEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
