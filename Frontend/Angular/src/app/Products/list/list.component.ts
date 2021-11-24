import { AbstractType, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { Product } from 'src/app/Models/product';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import { ExcelService } from 'src/app/Service/excel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/Models/category';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddComponent } from '../add/add.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loggeduser : any ;
  product: Product[];
  displayedColumns = ['id_producto', 'name', 'category', 'description', 'quantify', 'unit_price', 'edit-delete'];
  dataSource: MatTableDataSource<Product>
  @ViewChild(MatPaginator)paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog:MatDialog,
    private productService: ProductService,
    private excelService: ExcelService,
    private router: Router,
    private loginService :LoginService
  ){}


  ngOnInit(): void {
    this.loggeduser = this.loginService.getLoggedUser();
    if( this.loggeduser === undefined ){
      this.router.navigate(['login']);
    }

    this.update();
    this.list();
  }

  private update(){
    this.productService.updateProduct.subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  private list(){
    this.productService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });
}

 open_dialog_delete(id: number){
    let dialogRef = this.dialog.open(DeleteComponent, {
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(status => {
      if(status){
        this.productService.delete(id).subscribe(()=>{
          this.productService.list().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }


  open_edit(product: Product){
    this.dialog.open(EditComponent, {
     width: '360px',
     data: product
    })
  }

  open_add(){
    this.dialog.open(AddComponent, {
      width: '500px'
    })
  }

  filter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
