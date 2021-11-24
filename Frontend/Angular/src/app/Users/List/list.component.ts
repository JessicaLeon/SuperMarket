import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../Delete/delete.component';
import { EditUserComponent } from '../Edit/edit.component';
import { CreateComponent } from '../Create/create.component';
import { Users } from 'src/app/Models/users';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUserComponent implements OnInit {

  users: Users[];
  loggeduser : any ;

  constructor(
    private dialog:MatDialog,
    private usersService: UsersService,
    private router: Router,
    private loginService :LoginService

  ){}


  ngOnInit(): void {
    this.loggeduser = this.loginService.getLoggedUser();
    if( this.loggeduser === undefined ){
      this.router.navigate(['login']);
    }

    this.usersService.updateUsers.subscribe(data =>{
      this.users = data });
    this.list();


  }

  private list(){
    this.usersService.list().subscribe(data => {this.users = data});
  }

  open_dialog_delete(id: number){
    let dialogRef = this.dialog.open(DeleteComponent, {
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(status => {
      if(status){
        this.usersService.delete(id).subscribe(()=>{
          this.usersService.list().subscribe(data =>{
            this.users = data;
          })
        })
      }
    })
  }

  open_edit(users: Users){
    this.dialog.open(EditUserComponent, {
      width: '260px',
      data: users
    })
  }

  open_create(){
    this.dialog.open(CreateComponent, {
      width: '500px'
    })
  }

}
