import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product, Comment } from '../shared/product.service';
import { rootRoute } from '@angular/router/src/router_module';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;
  private comments: Array<Comment>;
  private newRating = 5;
  private newCom = '';

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId = Number(this.routeInfo.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getRatingInfo(this.product.id);
  }

  addComment() {
    
  }
}
