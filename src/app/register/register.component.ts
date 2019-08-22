import { Component, OnInit } from '@angular/core';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders:Gender[] = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'others-2', viewValue: 'Others'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
