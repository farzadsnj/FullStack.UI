import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
    id: '1',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  },
  {
    id: '12',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  },
  {
    id: '123',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  },
  {
    id: '1234',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  },
  {
    id: '12345',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  },
  {
    id: '123456',
    name:'Farzad Sanjarani',
    email:'farzadsnjau@gmail.com',
    phone: 415479443,
    salary: 6000,
    department: 'Human Resources'
  }
]

  constructor(){}

  ngOnInit(): void {
    // this.employees.push()
  }
}
