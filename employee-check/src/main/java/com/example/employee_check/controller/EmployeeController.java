package com.example.employee_check.controller;


import com.example.employee_check.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/exists/{name}")
    public boolean employeeExists(@PathVariable String name) {
        return employeeService.employeeExists(name);
    }
}
