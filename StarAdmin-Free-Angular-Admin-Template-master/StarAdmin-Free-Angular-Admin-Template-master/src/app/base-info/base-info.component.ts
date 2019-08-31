import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Basevariabale} from './basevariabale';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {

  constructor(private bb: FormBuilder) {
    this.createForm1();
  }
  baseForm: FormGroup;
  base = new Basevariabale();


  createForm1() {
    this.baseForm = this.bb.group({
      RegionAddEditInput: [null, Validators.required],
      FloorCoverAddEditInput: [null, Validators.required],
      KitchenServiceAddEditInput: [null, Validators.required],
      FacilityAddEditInput: [null, Validators.required],
      PropertyAddEditInput: [null, Validators.required],

  });

}
  ngOnInit() {
  }
}
