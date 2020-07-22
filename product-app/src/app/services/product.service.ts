import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
  // const products: Product[] = [];
  // const p1 = new Product('001', 'cars 01', 100.0, true, 3.0);
  // const p2 = new Product('002', 'bike 02', 1000.0, false, 4.5);
  // const p3 = new Product('003', 'name 03', 500.0, true, 2.0);
  // const p4 = new Product('004', 'name 04', 250.0, true, 3.0);
  // const p5 = new Product('005', 'name 05', 199.0, true, 3.5);
  // products.push(p1, p2, p3, p4, p5);
  // return products;

  constructor(private http: HttpClient) {}
}
