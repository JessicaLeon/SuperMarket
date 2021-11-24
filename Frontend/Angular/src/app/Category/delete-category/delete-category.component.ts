import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>
  ) { }

  ngOnInit(): void {
  }

  delete_category():void{
    this.dialogRef.close(true);
  }

  cancel():void{
    this.dialogRef.close(false);
  }

}
