import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating = 0;
  private stars: boolean[];
  // tslint:disable-next-line:no-inferrable-types
  @Input()
  private readonly = true;

  constructor() { }

  ngOnInit() {
    // this.stars = [false, false, true, true, true];
    this.getStarFromProduct(this.rating);
  }

  getStarFromProduct(pRating: number) {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > pRating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
    }
  }
}
