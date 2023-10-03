import { Component, OnInit } from '@angular/core';
import { Apiservice} from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent implements OnInit{
  newdata:any;
     constructor(private _apiservie:Apiservice){}
     ngOnInit(): void {
       this._apiservie.getdata().subscribe((res)=>{
         this.newdata = res
       })
}
}
