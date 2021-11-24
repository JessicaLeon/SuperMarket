import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.css']
})
export class ResetComponent implements OnInit {

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

  resetpass(){
    const user = this.form.value.user;
    const password =this.form.value.password;
    const passwordagain = this.form.value.passwordagain;

    this.loginService.resetpass( user , password , passwordagain  ).subscribe(data => {
        localStorage.setItem('loggeduser', JSON.stringify(data));
        this.cloading();
    });
  }

  error(){
    this._snackBar.open('Usuario o Contraseña incorrecta', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  cloading(){
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1500);

  }

}


