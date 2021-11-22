import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
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

  //Validar sin Backend
  if(user == 'Jessica' && password == 'admin'){
    //Redireccion al home
    this.cloading();
  } else{
    //Mensaje de error
    this.error();
    this.form.reset();
  } 
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
    this.router.navigate(['home']);
  }, 1500); 
  
}
}

