import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  loading = false;

  constructor(
    private loginService: LoginService ,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
      this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    const user = this.form.value.user;
    const password =this.form.value.password;

    this.loginService.login( user , password ).subscribe(data => {
      if( data.user === null ){
        this.error();
        this.form.reset();
      } else {
        alert('Welcome ' + data.user.name_user );
        localStorage.setItem('loggeduser', JSON.stringify(data));
        this.cloading();
      }
    });
}

error(){
  this._snackBar.open('Usuario o Contraseña incorrecta', '', {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
}

reset() {
    this.router.navigate(['/reset']);
}

cloading(){
  this.loading = true;

  setTimeout(() => {
    this.router.navigate(['home']);
  }, 1500);

}

}

