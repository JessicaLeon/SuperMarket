import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<AddCategoryComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: Category
  ) { }

  ngOnInit(): void {
    this.category = new Category();
  }

  create_cat():void{
    this.categoryService.add(this.category).subscribe(() =>{
    return this.categoryService.list().subscribe(data=>{
    this.categoryService.updateCategory.next(data);
    })
    })
    this.cancelar();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
