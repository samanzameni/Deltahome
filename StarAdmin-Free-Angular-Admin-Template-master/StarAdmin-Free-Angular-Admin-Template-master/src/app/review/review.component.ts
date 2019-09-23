import {Component, Input, OnInit} from '@angular/core';
import {Deposit} from '../zameniform/deposit';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
@Input() reviewModel: Deposit;

  constructor() { }
  reviewForm: FormGroup;

  ngOnInit() {
    console.log(this.reviewModel);
  }

}
