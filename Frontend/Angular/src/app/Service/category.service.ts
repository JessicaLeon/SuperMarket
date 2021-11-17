import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = "http://localhost:8080/category";

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }

  
}
