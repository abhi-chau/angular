import { Component } from '@angular/core';
// import { FormService, Service } from '../form.service';


@Component({
  selector: 'app-formdemo',
  // providers: [ FormService],
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent {
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
  // states: string[] | undefined;

  // constructor(service : FormService ){
  //   this.states = service.getStates();
  // }
  data = "";


}


