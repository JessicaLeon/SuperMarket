import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/Models/category';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from 'src/app/edit-category/edit-category.component';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  category: Category[];
  displayedColumns = ['id_category', 'name_category', 'edit-delete'];
  dataSource: MatTableDataSource<Category>

  constructor(private categoryService: CategoryService,
    private dialog:MatDialog,
    ) { }

  ngOnInit(): void {
    this.categoryService.updateCategory.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.list();
  }

  private list(){
    this.categoryService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });
}

open_dialog_delete_cat(id: number){
  let dialogRef = this.dialog.open(DeleteCategoryComponent, {
    disableClose:true
  });
  dialogRef.afterClosed().subscribe(status => {
    if(status){
      this.categoryService.delete(id).subscribe(()=>{
        this.categoryService.list().subscribe(data =>{
          this.dataSource = new MatTableDataSource(data);
        })
      })
    }
  })
}

open_edit_cat(category?: Category){
  category != null ? category: new Category(0, "");
  this.dialog.open(EditCategoryComponent, {
   width: '360px',
   data: category
  })

}


}

