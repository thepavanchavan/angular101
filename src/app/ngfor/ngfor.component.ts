import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = [
    {sr:1, name:'John', city:'Pune'},
    {sr:2, name:'Vivian', city:'Mumbai'},
    {sr:3, name:'Shellow', city:'Chennai'}
  ]
}
