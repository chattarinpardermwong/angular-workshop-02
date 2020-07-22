import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';
  // filterData: string = '';

  constructor(public service: ProductService) {}

  ngOnInit(): void {
    this.getAll();
    // this.products = this.service.getAllProduct();
    // const p1 = new Product('001', 'cars 01', 100.0, true, 3.0);
    // const p2 = new Product('002', 'bike 02', 1000.0, false, 4.5);
    // const p3 = new Product('003', 'name 03', 500.0, true, 2.0);
    // const p4 = new Product('004', 'name 04', 250.0, true, 3.0);
    // const p5 = new Product('005', 'name 05', 199.0, true, 3.5);
    // this.products.push(p1, p2, p3, p4, p5);
  }
  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }
}
