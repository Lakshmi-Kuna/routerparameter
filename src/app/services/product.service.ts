import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInf } from '../contract/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProducts():Observable<ProductInf[]>{
    return this.http.get<ProductInf[]>('https://fakestoreapi.com/products');
  }
  public getProductsById(id:number):Observable<ProductInf>{
    return this.http.get<ProductInf>('https://fakestoreapi.com/products/'+id);
  }
}
