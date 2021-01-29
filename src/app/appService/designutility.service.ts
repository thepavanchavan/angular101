import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  messageAlert(){
    alert("Thank You, From DI");
}
}
