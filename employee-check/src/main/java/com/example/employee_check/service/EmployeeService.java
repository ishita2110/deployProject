package com.example.employee_check.service;


import com.example.employee_check.model.Employee;
import com.example.employee_check.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public boolean employeeExists(String name) {
        Optional<Employee> employee = employeeRepository.findByName(name);
        return employee.isPresent();
    }
}
