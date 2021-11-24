import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/Service/users.service';
import { Users } from 'src/app/Models/users';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {
  
  user: Users;

  constructor(
    private dialogRef: MatDialogRef<EditUserComponent>,
    private UsersService: UsersService,
    @Inject(MAT_DIALOG_DATA) private data: Users) {}
  

  ngOnInit(): void {
    this.edit();
  }



  edit():void{
    this.user = new Users();
    this.user.id_user=this.data.id_user;
    this.user.user_name=this.data.user_name;
    this.user.pass_user=this.data.pass_user;
    this.user.email_user=this.data.email_user;
    this.user.name_user=this.data.name_user;
    this.user.lastname_user=this.data.lastname_user;
    this.user.role_user=this.data.role_user;
    this.user.date_user=this.data.date_user;

  }

  guardar(){
    this.UsersService.edit(this.user).subscribe(() =>{
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
