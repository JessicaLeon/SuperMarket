import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Service/product.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  product: Product;

  constructor(
    private ProductService: ProductService,
    @Inject(MAT_DIALOG_DATA) private data: Product) {}
  

  ngOnInit(): void {
    this.edit();
  }

  edit():void{
    this.product = new Product(0, "", new Category(0, ""), "", 0, 0);
  }

}
