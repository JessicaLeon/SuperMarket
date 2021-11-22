import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>
  ) { }

  ngOnInit(): void {
  }

  delete_user():void{
    this.dialogRef.close(true);
  }

  cancel():void{
    this.dialogRef.close(false);
  }

}
