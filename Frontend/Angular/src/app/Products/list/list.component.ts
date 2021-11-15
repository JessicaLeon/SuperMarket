import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { Product } from 'src/app/Models/product';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  product: Product[];

  constructor(
    private dialog:MatDialog,
    private productService: ProductService){}
  

  ngOnInit(): void {
  this.list();

  }

  private list(){
    this.productService.list().subscribe(data => {this.product = data});
  }

  open_dialog_delete(id: number){
    let dialogRef = this.dialog.open(DeleteComponent, {
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(status => {
      if(status){
        this.productService.delete(id).subscribe(()=>{
          this.productService.list().subscribe(data =>{
            this.product = data;
          })
        })
      }
    })
  }

  open_edit(product: Product){
    this.dialog.open(EditComponent, {
      width: '260px',
      data: product
    })
  }

  add(){

  }

}
