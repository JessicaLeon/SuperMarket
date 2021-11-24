import { Component } from "@angular/core";
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.css']
})

export class ResetComponent {
  username: string ;
  password: string ;
  passwordagain: string ;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
    this.passwordagain = '';
  }

  resetpass() {
    this.loginService.resetpass( this.username , this.password , this.passwordagain  ).subscribe(data => {
       alert( data.message );
       this.router.navigate(['/login']);
    });

  }
}
