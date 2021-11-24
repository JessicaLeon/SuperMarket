import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggeduser: String ;

  constructor(
    private loginService:LoginService

  ) {
    let loggeduser : any = this.loginService.getLoggedUser();
    this.loggeduser = loggeduser===undefined?'':loggeduser.name_user;
  }

  ngOnInit(): void {


  }

  logout(){

    this.loginService.logout();
    let loggeduser : any = this.loginService.getLoggedUser();
    this.loggeduser = loggeduser===undefined?'':loggeduser.name_user;
  }




}


