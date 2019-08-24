import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  Qualifications: string[];
  Experience: string[];
  Languages: string[];

  constructor() { }

  Employeeasda: Employee = {
    Name: '',
    Experience: '',
    Qualification: '',
    Languages: []
  };

  ngOnInit() {
    this.Qualifications = ['BE', 'ME' ];
    this.Experience = ['Fresher', 'Experienced'];
    this.Languages = ['English', 'Hindi', 'Gujarati', 'French', 'Germany'];
  }


}
