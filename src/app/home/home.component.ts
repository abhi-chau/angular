import { Component, OnInit } from '@angular/core';
import { Apiservice} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  showDragIcons: boolean;
  newdata:any;
  constructor(private _apiservie:Apiservice) {
    
  this.showDragIcons = true;

  this.onReorder = this.onReorder.bind(this);
  }
  ngOnInit(){
    this._apiservie.getdata().subscribe((res)=>{
      this.newdata = res
    })}
    onReorder(e:any) {
      const visibleRows = e.component.getVisibleRows();
      const toIndex = this.newdata.findIndex((item: { id: any; }) => item.id === visibleRows[e.toIndex].data.id);
      const fromIndex = this.newdata.findIndex((item: {id: any; }) => item.id === e.itemData.id);
  
      this.newdata.splice(fromIndex, 1);
      this.newdata.splice(toIndex, 0, e.itemData);
    }
}

