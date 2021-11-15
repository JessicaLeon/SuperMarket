import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
}
