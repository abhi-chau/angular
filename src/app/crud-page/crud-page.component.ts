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
  newProduct= {id: 0,title: "" , price: 0, description: ""};
  isEditing = false;

  constructor(private serverservice:DataService) { }

  ngOnInit() {
    this.getProductdata();
  }

  getProductdata(){
    this.serverservice.getProduct().subscribe((data)=>{
      this.products = data;
    })
  }

  viewProduct(productId:number){
   this.serverservice.getProductById(productId).subscribe((product)=>{
    this.selectedProduct = product
   })
  }

  addProduct(){
    this.serverservice.createProduct(this.newProduct).subscribe((product)=>{
      this.products.push(product);
      this.newProduct = {id: 0,title: "" , price: 0, description: ""};
    })
  }

  editProduct(product:any){
    this.isEditing = true;
    this.newProduct = {...product};
  }

  updateProduct(productId:number){
    this.serverservice.updateProduct(productId , this.newProduct).subscribe((updatedProduct)=>{
      const index = this.products.findIndex((p)=>{p.id === productId});
      this.products[index] = updatedProduct;
      this.isEditing = false;
      this.newProduct = {id: 0, title: '', price: 0, description: '' }; 
    })
  }

  deleteProduct(productId:number){
    this.serverservice.deleteProduct(productId).subscribe(()=>{
      this.products = this.products.filter((p)=>{p.id !== productId})
    })
  }

}
