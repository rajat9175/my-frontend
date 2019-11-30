import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products = [];
  constructor(public service:ProductService) { }

  ngOnInit() 
  {
    let observableResult = this.service.Select();
    observableResult.subscribe((result)=>{
      this.products = result as any;
    })
  }

}
