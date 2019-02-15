import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private prodects: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.prodects = [
      new Product(1, '商品1', 4.5, 1.5, '贩卖商品1', ['硬件设备']),
      new Product(2, '商品1', 2.5, 2.5, '贩卖商品2', ['软件设备']),
      new Product(3, '商品1', 3.5, 3.5, '贩卖商品3', ['外部设备']),
      new Product(4, '商品1', 1.5, 4.5, '贩卖商品4', ['硬件设备', '软件设备']),
      new Product(5, '商品1', 2.5, 5.5, '贩卖商品5', ['硬件设备', '外部设备']),
      new Product(6, '商品1', 4.5, 6.5, '贩卖商品6', ['硬件设备', '软件设备', '外部设备'])
    ];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
