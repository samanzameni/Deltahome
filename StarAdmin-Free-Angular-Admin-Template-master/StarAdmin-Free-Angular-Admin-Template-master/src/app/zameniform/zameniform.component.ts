import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Deposit} from './deposit';
import {DepositService} from './deposit.service';




@Component({
  selector: 'app-zameniform',
  templateUrl: './zameniform.component.html',
  styleUrls: ['./zameniform.component.scss']
})
export class ZameniformComponent implements OnInit {


  constructor(public depositService: DepositService, private fb: FormBuilder) {
    this.createForm();
  }

  angForm: FormGroup;
  model = new Deposit();
  submitted = false;


  onSubmit() {
    this.submitted = true;
    return this.depositService.contactForm(this.model).subscribe(
      (data) => {this.model = data; },
      err => console.log(err)
      );
  }

  onSubmit2() {
    this.submitted = true;
    return this.depositService.contactForm2().subscribe(
      (res) => console.log(res),
      err => console.log(err)
    );
  }


  createForm() {
    this.angForm = this.fb.group({
      landlord: [null, Validators.required],
      phone: [null, Validators.required],
      Mobile: [null, Validators.required],
      Region: [null, Validators.required],
      Address: [null, Validators.required],
      Property: [null, Validators.required],
      Building: [null, Validators.required],
      Storeys: [null, Validators.required],
      Apartment: [null, Validators.required],
      Number: [null, Validators.required],
      Floor: [null, Validators.required],
      No: [null, Validators.required],
      Area: [null, Validators.required],
      Bed: [null, Validators.required],
      Bath: [null, Validators.required],
      Age: [null, Validators.required],
      Monthly: [null, Validators.required],
      Kitchen: [null, Validators.required],
      material: [null, Validators.required],
      Tel: [null, Validators.required],
    });
  }



  ngOnInit() {

  }




}
