import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Deposit} from './deposit';
import {DepositService} from './deposit.service';
import {Firstdata} from '../Classes/firstdata';



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
  listarray = new Firstdata();
  public i: any = 0;

  setfacility(facilityid, event) {
    if (event.target.checked) {
      this.model.depositFacilities.push(facilityid);
    } else {
      this.i = this.model.depositFacilities.indexOf((facilityid));
      this.model.depositFacilities.splice(this.i, 1); }
  }

  advisorarray() {
    return this.depositService.contactForm2().subscribe(
      (data) => { this.listarray = data;
        console.log(this.listarray);
        },
    (err) => console.log(err)
    );
  }


  onSubmit() {
    this.submitted = true;
    return this.depositService.contactForm(this.model).subscribe(
      (data) => {this.model = data; },
      err => console.log(err)
      );
  }



  createForm() {
    this.angForm = this.fb.group({
      ownerName: [null, Validators.required],
      ownerPhone: [null, Validators.required],
      ownerMobile: [null, Validators.required],
      region_id: [null, Validators.required],
      address: [null, Validators.required],
      propertyType_id: [null, Validators.required],
      unitInFloor: [null, Validators.required],
      floorNumber: [null, Validators.required],
      floorCount: [null, Validators.required],
      buildingArea: [null, Validators.required],
      bedCount: [null, Validators.required],
      bathCount: [null, Validators.required],
      buildingAge: [null, Validators.required],
      monthlyRent: [null, Validators.required],
      kitchenService_id: [null, Validators.required],
      floorCover_id: [null, Validators.required],
      telLineCount: [null, Validators.required],
    });
  }



  ngOnInit() {
    this.advisorarray();
  }



}
