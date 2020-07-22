import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = (75 / 5) * this.rating;
  }

  onClickRating(): void {
    console.log('Click on rating');
    this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
  }

  constructor() {}

  ngOnInit(): void {}
}
