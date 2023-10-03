import { Component, OnInit } from '@angular/core';
import { Service, Customer } from '../app.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [Service],
})
export class TabComponent implements OnInit{
  
  customers: Customer[];
  tabDataSource: any [] = [];
  
  constructor(service: Service) {
    this.customers = service.getCustomers();
  }
 
  ngOnInit(): void {
    this.serviceData();
  }
 
  sab:any[]=[
    'CompanyName', 'City', 'State', 'Phone', 'Fax','Website'
  ]

  wings=[
    {Text: 'Date', dataType:'date'},
    {Text: "Party code" , dataType:'selectbox'},
    {Text:"GST Transction", dataType:'String'},
    {Text: "Service Tax", dataType:'selectbox'},
    {Text: "shopping", dataType:'String'},
    {Text: "Branch", dataType:'selectbox1'},
    {Text: "party code", dataType:'selectbox2'},
    {Text: "shopping", dataType:'String'},
    {Text: "credit", dataType:'String'},
    {Text: "VAT/cst transaction", dataType:'selectbox3'},
    {Text: "Remarks", dataType:'String'},
    {Text: "Registration number", dataType:'Number'},
    {Text: "Party GST number", dataType:'Number'},
    {Text: "Price List", dataType:'selectbox2'},
    ]

    partycode:Number[]=[1,2,3,4,5];
    item: any;
    Branch:String[]=["Hyd","Delhi","Bangaluru","Mumbai"]
    PriceList:Number[]=[2300.00,3099.00,4090.00,5050.00]
    VatTax:Number[]=[23,33,55,11]


  tabColumnData:any[]=[
    {id:1, tabName: 'Tab1', singleRow: true,},
    {id:2, tabName: 'Tab2', singleRow: false,},
    {id:3, tabName: 'Tab3', singleRow: true,},
  ]  
  serviceData(){
    this.tabDataSource =[
        {Date: "01/05/2002",Branch: "Delhi",remark: "s1"},
        {Date: "01/05/2005",Branch: "Hyd",remark: "s2"},
        {Date: "01/05/2004",Branch: "Bang",remark: "s3"},
        {Date: "01/05/2008",Branch: "PNG",remark: "s4"},
        {Date: "01/05/2001",Branch: "Delhi",remark: "s5"},
        {Date: "01/05/2009",Branch: "Hyd",remark: "s1"},
        {Date: "01/05/1995",Branch: "Bang",remark: "s2"},
        {Date: "01/05/2005",Branch: "Hyd",remark: "s3"},
        {Date: "01/05/2000",Branch: "Hyd",remark: "s4"},
        {Date: "01/05/1998",Branch: "Hyd",remark: "s5"},
      ]
  }
}
