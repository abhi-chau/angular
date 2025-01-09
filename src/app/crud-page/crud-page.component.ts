import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnInit {

  products:any[] = [];
  selectedProduct:any = null;
  newProduct:any;

  constructor(private serverservice:DataService) { }

  ngOnInit() {
    this.getProductdata();
  }

  getProductdata(){
    this.serverservice.getProduct().subscribe((data)=>{
      this.products = data;
      console.log("this.products",this.products)
    })
  }

  viewProduct(productId:number){
   this.serverservice.getProductById(productId).subscribe((product)=>{
    this.selectedProduct = product
    console.log("this.products",this.selectedProduct)
   })
  }

  // editProduct(product:any){
  //   this.serverservice.updateProduct(product).subscribe((product)=>{

  //   })
  // }

  deleteProduct(){

  }

}
