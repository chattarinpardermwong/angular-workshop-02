import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    const p1 = new Product('001', 'Name 01', 100.0, true, 3.0);
    const p2 = new Product('002', 'Name 02', 1000.0, false, 4.5);
    const p3 = new Product('003', 'Name 03', 500.0, true, 2.0);
    const p4 = new Product('004', 'Name 04', 250.0, true, 3.0);
    const p5 = new Product('005', 'Name 05', 199.0, true, 3.5);
    this.products.push(p1, p2, p3, p4, p5);
  }
}
