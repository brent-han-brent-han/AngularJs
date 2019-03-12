import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private imgUrl = 'http://placehold.it/245x150';
  private prodects: Array<Product>;
  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
    // .debounceTime(500)
    .subscribe((value: string) => {
      return this.keyword = String(value);
    });
  }

  ngOnInit() {
    this.prodects = this.productService.getProducts();
  }
}

