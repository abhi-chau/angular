import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://fakestoreapi.com/products';

constructor(private http:HttpClient) { }

getProduct():Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

getProductById(productId:number):Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/${productId}`);
}

createProduct(product:any):Observable<any[]>{
  return this.http.post<any[]>(this.apiUrl , product);
}

updateProduct(productId:number, product:any):Observable<any[]>{
  return this.http.put<any[]>(`${this.apiUrl}/${productId}`,product);
}

deleteProduct(productId:number){
  return this.http.delete<any[]>(`${this.apiUrl}/${productId}`);
}

}
