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
    this.createForm();
  }
  baseForm: FormGroup;
  base = new Basevariabale();


  createForm() {
    this.baseForm = this.bb.group({
      RegionAddEditInput: [null, Validators.required],
      FloorCoverAddEditIpout: [null, Validators.required],
      KitchenServiceAddEditInput: [null, Validators.required],
      FacilityAddEditInput: [null, Validators.required],
      PropertyAddEditInput: [null, Validators.required],

  });

}
  ngOnInit() {
  }
}
