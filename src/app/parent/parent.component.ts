import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl:'./parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  receivedDataFromChild: string | undefined;
  handleDataFromChild(data: string) {
    this.receivedDataFromChild = data;
  }
  UserName:string = "";

  friendlist= [{name:"abhi", age:22},
  {name:"subam", age:25},
  {name:"ajay", age:22},
  {name:"kundan", age:28}
]
}
