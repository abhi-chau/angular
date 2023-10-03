import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output()sendDataToParent:EventEmitter<string>=new EventEmitter<string>()
  constructor(){}

  



   sendDataToParentFunction() {
    this.sendDataToParent.emit("Message from child to parent");
  }
}
