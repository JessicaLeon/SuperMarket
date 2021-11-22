import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Models/users';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  updateUsers = new Subject<Users[]>();

  private url: string = "http://localhost:8080/user";

  constructor(private http: HttpClient) { 

  }

  list(): Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  edit(user: Users){
    return this.http.put(this.url, user);
  }

  create(user: Users){
    return this.http.post(this.url, user);
  }
}
