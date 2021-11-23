import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductService } from 'src/app/Service/product.service';
import * as $ from 'jquery';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

  product:Product = new Product(0, "", new Category(0, ""), "", 0, 0);
  category: Category[];
  


  constructor(
   private productService:ProductService,
   private router:Router,
   private categoryService: CategoryService,
  
     
  ) { }

  ngOnInit(): void {
    this.categoryService.list().subscribe(data => {
      this.category=data;
    });
    

    
  }


  create():void{
    console.log(this.product);
    this.productService.add(this.product).subscribe(() =>{
    return this.productService.list().subscribe(data=>{
    this.productService.updateProduct.next(data);
    })
    })
    this.cancelar();
  }

  cancelar(){
    
  }

}


