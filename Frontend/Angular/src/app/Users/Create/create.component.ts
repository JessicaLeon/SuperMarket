import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/Service/users.service';
import { Users } from 'src/app/Models/users';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  user: Users;

  constructor(
    private dialogRef: MatDialogRef<CreateComponent>,
    private UsersService: UsersService,
    @Inject(MAT_DIALOG_DATA) private data: Users) { }
    
   
  ngOnInit(): void {
    this.user = new Users();
  }

  guardar(){
    let myDate = new Date(); 
    this.user.date_user=myDate;
    this.UsersService.create(this.user).subscribe(() =>{
      return this.UsersService.list().subscribe(data=>{
        this.UsersService.updateUsers.next(data);
        })
      })
    this.cancelar();
  }

  cancelar(){
    this.dialogRef.close();
  }
}