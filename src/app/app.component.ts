import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckEmployeeComponent } from './check-employee/check-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CheckEmployeeComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employeeCheck';
}
