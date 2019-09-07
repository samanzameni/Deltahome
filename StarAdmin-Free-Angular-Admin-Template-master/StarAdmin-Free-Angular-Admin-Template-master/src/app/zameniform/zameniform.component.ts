import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Deposit} from './deposit';
import {DepositService} from './deposit.service';



export class ListAdvisor {
  public fullName: string;
  public ID: number;
}
export class ListPropertys {
  public title: string;
  public ID: number;
}
export class ListFacility {
  public title: string;
  public ID: number;
}
export class ListFloorCover {
  public title: string;
  public ID: number;
}
export class ListKitchenService {
  public title: string;
  public ID: number;
}
export class ListRegion {
  public title: string;
  public ID: number;
}
export class Firstdata {
  public listAdvisor: ListAdvisor[];
  public listFacility: ListFacility[];
  public listFloorCover: ListFloorCover[];
  public listKitchenService: ListKitchenService[];
  public listRegion: ListRegion[];
  public listPropertys: ListPropertys[];
}





@Component({
  selector: 'app-zameniform',
  templateUrl: './zameniform.component.html',
  styleUrls: ['./zameniform.component.scss']
})
export class ZameniformComponent implements OnInit {

// let file =
  constructor(public depositService: DepositService, private fb: FormBuilder) {
    this.createForm();

  }

  angForm: FormGroup;
  model = new Deposit();
  submitted = false;
  listarray = new Firstdata();



  adviserarray() {
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
    this.adviserarray();
  }





}
