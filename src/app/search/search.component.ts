import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private catalogs: string[];
  formModel: FormGroup;

  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, this.checkPlusNumber],
      catalog: ['-1']
    });
  }

  ngOnInit() {
    this.catalogs = this.productService.getCatelogs();
  }

  checkPlusNumber(formControl: FormControl): any {
    if (formControl.value == null) {
      return null;
    }
    // tslint:disable-next-line:radix
    const price =  parseInt(formControl.value);
    if (price > 0) {
      return null;
    } else {
      return {checkPlusNumber: true};
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
    console.log(this.formModel.get('title').errors);
    console.log(this.formModel.get('title').value);
  }
}
