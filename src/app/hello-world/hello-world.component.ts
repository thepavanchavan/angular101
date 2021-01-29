import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appService/designutility.service';
import {MessageServices} from '../appService/message.service'

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }

  ngOnInit() {
  }
btnClick(){
  // const msgService = new MessageServices();
  // msgService.messageAlert();
  this._msgService.messageAlert();
}
}
