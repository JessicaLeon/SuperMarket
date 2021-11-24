import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggeduser : any ;

  constructor(
    private loginService:LoginService,
    private router: Router

  ) {
      this.loggeduser = this.loginService.getLoggedUser();
  }

  ngOnInit(): void {


  }

  logout(){

    this.loginService.logout();
    let loggeduser : any = this.loginService.getLoggedUser();
    this.loggeduser = this.loginService.getLoggedUser();
    this.router.navigate(['login']);
  }




}
