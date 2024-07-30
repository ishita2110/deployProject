import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-check-employee',
  templateUrl: './check-employee.component.html',
  styleUrls: ['./check-employee.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CheckEmployeeComponent {
  employeeName: string = '';
  exists: boolean | null = null;

  constructor(private employeeService: EmployeeService) { }

  checkEmployee() {
    this.employeeService.employeeExists(this.employeeName).subscribe(
      result => this.exists = result,
      error => console.error(error)
    );
  }
}