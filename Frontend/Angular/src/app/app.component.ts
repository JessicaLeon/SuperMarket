import { Component, OnInit } from '@angular/core';
import { ProductService } from './Service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperMarket';

  constructor(private router:Router){

  }

  ngOnInit(): void{
    
  }
}
