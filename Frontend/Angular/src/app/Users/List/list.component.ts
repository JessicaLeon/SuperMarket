import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../Delete/delete.component';
import { EditUserComponent } from '../Edit/edit.component';
import { CreateComponent } from '../Create/create.component';
import { Users } from 'src/app/Models/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUserComponent implements OnInit {

  users: Users[];

  constructor(
    private dialog:MatDialog,
    private usersService: UsersService){}
  

  ngOnInit(): void {
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