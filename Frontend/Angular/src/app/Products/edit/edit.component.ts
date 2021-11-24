import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Service/product.service';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Service/category.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  product: Product;
  category: Category[];

  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    private categoryService: CategoryService,
    private ProductService: ProductService,
    @Inject(MAT_DIALOG_DATA) private data: Product) {}
  

  ngOnInit(): void {
    this.edit();
    
  }

  edit():void{
    this.product = new Product();
    this.product.id_producto=this.data.id_producto;
    this.product.name=this.data.name;
    this.product.category=this.data.category;
    this.product.description=this.data.description;
    this.product.quantify=this.data.quantify;
    this.product.unit_price=this.data.unit_price;

    this.categoryService.list().subscribe(data => {
      this.category=data;
    })
  }

  guardar(){
      this.ProductService.add(this.product).subscribe(() =>{
        return this.ProductService.list().subscribe(data =>{
          this.ProductService.updateProduct.next(data);
        })
      })
      this.cancelar();
    }
      

  cancelar(){
    this.dialogRef.close();
  }

}
