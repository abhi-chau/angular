import { Component } from '@angular/core';
import { Apiservice} from '../app.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent {

users: any[] = [];
pri: any;
searchText: any = '';
selectedColumn: string = 'username'; // Default selected column

constructor(private servicesService: Apiservice) { }

ngOnInit() {
  this.servicesService.getdata().subscribe((data: any) => {
    this.users = data;
    this.pri = [
      'id',
      'name',
      'username',
      'email',
      'address.street',
      'address.city',
      'address.zipcode'
    ];
  });
}

// Function to apply the filter based on selected column and search text
applyFilter() {
  if (this.selectedColumn && this.searchText !== '') {
    this.users = this.users.filter((item: any) => {
      const columnValue = this.getColumnValue(item, this.selectedColumn);
      return columnValue && columnValue.toString().toLowerCase().includes(this.searchText.toLowerCase());
    });
  } else if (this.searchText === '') {
    // If searchText is empty, reset users to the original data
    this.servicesService.getdata().subscribe((data: any) => {
      this.users = data;
    });
  }
}
reset(){
  this.servicesService.getdata().subscribe((data: any) => {
    this.users = data;
  });
  this.searchText = '';
}


// Helper function to get the column value, including nested properties
getColumnValue(item: any, column: string): any {
  const columns = column.split('.'); // Split by dot to handle nested properties
  let value = item;

  for (const col of columns) {
    value = value[col];
  }

  return value;
}

}
