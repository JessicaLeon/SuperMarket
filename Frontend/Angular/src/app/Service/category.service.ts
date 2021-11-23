import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  updateCategory = new Subject<Category[]>();

  private url: string = "http://localhost:8080/category";

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(category: Category){
    return this.http.put(this.url, category);
  }

  add(category: Category){
    return this.http.post(this.url, category);
  }
  
}
