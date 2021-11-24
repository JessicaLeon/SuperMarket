import { Component } from "@angular/core";
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string ;
  password: string ;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
  }

  reset() {
    this.router.navigate(['/reset']);
  }


  login() {
    this.loginService.login( this.username , this.password ).subscribe(data => {
      if( data.user === null ){
        alert(data.message);
      } else {
        alert('Welcome ' + data.user.name_user );
        localStorage.setItem('loggeduser', JSON.stringify(data));
        this.router.navigate(['/productos']);
      }
    });
  }
}
