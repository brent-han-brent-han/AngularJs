import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Array<Product>;
  private comment: Array<Comment> = [
    new Comment(1 , 1, '2017-01-01', '张三', 2, '张三 product is cool~!'),
    new Comment(2 , 1, '2017-01-02', '李四', 3, '李四 product is cool~!'),
    new Comment(3 , 1, '2017-01-03', '王五', 1, '王五 product is cool~!'),
    new Comment(4 , 1, '2017-01-04', '赵六', 2, '赵六 product is cool~!'),
    new Comment(5 , 1, '2017-01-05', '钱一', 3, '钱一 product is cool~!'),
    new Comment(6 , 2, '2017-01-06', '张三', 4, '张三 product is cool~!'),
    new Comment(7 , 3, '2017-01-07', '李四', 3, '李四 product is cool~!'),
    new Comment(8 , 4, '2017-01-08', '王五', 2, '王五 product is cool~!'),
    new Comment(9 , 5, '2017-01-09', '赵六', 1, '赵六 product is cool~!'),
    new Comment(10 , 6, '2017-01-10', '钱一', 1, '钱一 product is cool~!')
  ];
  constructor() { }

  getProducts(): Array<Product> {
    this.products = [
      new Product(1, '商品1', 4.5, 1.5, '贩卖商品1', ['硬件设备']),
      new Product(2, '商品2', 2.5, 2.5, '贩卖商品2', ['软件设备']),
      new Product(3, '商品3', 3.5, 3.5, '贩卖商品3', ['外部设备']),
      new Product(4, '商品4', 1.5, 4.5, '贩卖商品4', ['硬件设备', '软件设备']),
      new Product(5, '商品5', 2.5, 4.5, '贩卖商品5', ['硬件设备', '外部设备']),
      new Product(6, '商品6', 4.5, 3.5, '贩卖商品6', ['硬件设备', '软件设备', '外部设备'])
    ];
    this.products.push(new Product(1, '商品1', 4.5, 1.5, '贩卖商品1', ['硬件设备']));

    return this.products;
  }

  getCatelogs(): string[] {
    return ['硬件设备', '软件设备', '外部设备'];
  }
  getProductById(id: number): Product {
    return this.products.find((productBean: Product) => productBean.id === id);
  }

  getRatingInfo(productId: number): Array<Comment> {
    return this.comment.filter((coment: Comment) => coment.productId === productId);
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
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public comment: string
  ) {
  }
}
