import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../Models/category';
import { CategoryService } from '../Service/category.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) private data: Category
  ) { }

  ngOnInit(): void {
    this.edit();
  }

  edit(): void{
    this.category = new Category(0, "");
    this.category.id_category=this.data.id_category;
    this.category.name_category=this.data.name_category;
  }

  guardar_cat(){
    if(this.category != null && this.category.id_category >0){
      this.categoryService.edit(this.category).subscribe(() => {
        return this.categoryService.list().subscribe(data=>{
          this.categoryService.updateCategory.next(data);
        })
      })
    } else {
      this.categoryService.add(this.category).subscribe(()=>{
        this.categoryService.list().subscribe(data =>{
          this.categoryService.updateCategory.next(data);
        })
      })
    }
    this.cancelar();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
