import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  updateProduct = new Subject<Product[]>();

  private url: string = "http://localhost:8080/productos";

  constructor(private http: HttpClient) { 

  }

  list(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(product: Product){
    return this.http.put(this.url, product);
  }

  add(product: Product):Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  update(product:Product):Observable<Product>{
    return this.http.put<Product>(this.url, product);
  }

 
  
}
