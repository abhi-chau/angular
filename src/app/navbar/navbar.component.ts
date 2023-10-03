import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  popupVisible = false;
  bookButtonOptions: any;

  showPopup() {
    this.popupVisible = true;
  }
  constructor(private form:FormService){
    this.bookButtonOptions = {
      width: 300,
      text: 'Book',
      type: 'default',
      stylingMode: 'contained',
      onClick: () => {
        this.popupVisible = false;
      },
    };
  }
  };
  
  
  
 
