import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appService/designutility.service';
import {MessageServices} from '../appService/message.service'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
 
  dateMessage!: string;
  constructor(private _msgService:DesignutilityService) { 
  setInterval(() => {
    let currentDate = new Date();
    this.dateMessage = currentDate.toDateString()+' '+currentDate.toLocaleDateString();
  },);
}
  ngOnInit() {
  }
  btnClick(){
    // const msgService = new MessageServices();
    // msgService.messageAlert();
    this._msgService.messageAlert();
  }
}
