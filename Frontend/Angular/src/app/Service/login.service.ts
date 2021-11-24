import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResult } from '../Models/loginresult';
import { ResetResult } from '../Models/resetresult';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "http://localhost:8080/Login";

  constructor(private http: HttpClient) {
  }

  login(username: string , password : string ):Observable<LoginResult>{
    return this.http.post<LoginResult>(`${this.url}` , { name : username , password: password  });
  }


  resetpass(username: string , password : string , passwordagain : string ):Observable<ResetResult>{
    return this.http.put<ResetResult>(`${this.url }` , { name : username , password: password  , passwordagain: passwordagain });
  }

  getLoggedUser():User | undefined {
    let loggeduser : any = localStorage.getItem('loggeduser') ;
    if( loggeduser !== null &&  loggeduser !== '' ){
      return JSON.parse( loggeduser ).user ;
    }
    return;

  }

  logout(){
    localStorage.setItem('loggeduser' , '' ) ;
  }
}
