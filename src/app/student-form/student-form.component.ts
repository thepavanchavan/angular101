import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  roll:any;
  name: any;
  email: any;
  city:any;

  constructor() { }

  ngOnInit(){
  }
dataDisplay(data){
    this.roll = data.roll;
    this.name = data.name;
    this.email = data.email;
    this.city = data.city;
}
}
