import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/Models/category';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from 'src/app/edit-category/edit-category.component';
import { MatPaginator } from '@angular/material/paginator';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  loggeduser : any ;
  category: Category[];
  displayedColumns = ['id_category', 'name_category', 'edit-delete'];
  dataSource: MatTableDataSource<Category>
  @ViewChild(MatPaginator)paginator: MatPaginator;


  constructor(private categoryService: CategoryService,
    private dialog:MatDialog,
    private router: Router,
    private loginService :LoginService
  ) { }

  ngOnInit(): void {
     this.loggeduser = this.loginService.getLoggedUser();
     if( this.loggeduser === undefined ){
       this.router.navigate(['login']);
     }

     this.categoryService.updateCategory.subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
     this.dataSource.paginator = this.paginator;

    })
    this.list();
  }

  private list(){
    this.categoryService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

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

open_edit_cat(category: Category){
  this.dialog.open(EditCategoryComponent, {
   width: '360px',
   data: category
  })

}

open_add(){
  this.dialog.open(AddCategoryComponent, {
    width: '360px'
  })
}

filter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
