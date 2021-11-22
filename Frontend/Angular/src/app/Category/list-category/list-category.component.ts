import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/Service/category.service';
import { Category } from 'src/app/Models/category';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  category: Category[];
  displayedColumns = ['id_category', 'name_category', 'edit-delete'];
  dataSource: MatTableDataSource<Category>

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.list();
  }

  private list(){
    this.categoryService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });
}

}
