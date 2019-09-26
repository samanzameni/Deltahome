import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Deposit} from './deposit';
import {DepositService} from './deposit.service';
import {Firstdata} from '../Classes/firstdata';
import { ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-zameniform',
  templateUrl: './zameniform.component.html',
  styleUrls: ['./zameniform.component.scss']
})
export class ZameniformComponent implements OnInit {
  constructor(public depositService: DepositService, private fb: FormBuilder , private router: ActivatedRoute, private http: HttpClient ) {
    this.createForm();
  }
  angForm: FormGroup;
  model = new Deposit();
  submitted = false;
  listarray = new Firstdata();
  public i: any = 0;
  ServerUrl = 'http://172.16.25.113/api/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + this.token
      }
    )
  };
  public  visibleForm = true;
  @Output() Event = new EventEmitter<boolean>();
  @Output() AddPropertyEvent = new EventEmitter<Deposit>();
  VisibleEvent() {
    this.Event.emit(this.visibleForm);
    this.onSubmit();
    this.AddPropertyEvent.emit(this.model);
  }
  setfacility(facilityid, event, title) {
    if (event.checked) {
      console.log(this.model.depositFac);
      this.model.depositFac.push(facilityid);

     // this.model.depositFac = facilityid;
       this.model.depositFac_title.push(title);
      console.log(this.model.depositFac_title);
     // this.model.depositFac_title = title;
    } else {
      this.i = this.model.depositFac.indexOf((facilityid));
      this.model.depositFac.splice(this.i, 1);
      this.i = this.model.depositFac_title.indexOf((title));
      this.model.depositFac_title.splice(this.i, 1);
    }
    console.log(this.model.depositFac);
  }
  advisorarray() {
    return this.depositService.contactForm2().subscribe(
      (data) => {
        this.listarray = data;
        console.log(this.listarray);
        },
    (err) => console.log(err)
    );
  }
  onSubmit() {
    this.submitted = true;
    // return this.depositService.contactForm(this.model).subscribe(
    //   (data) => {this.model = data; },
    //   err => { console.log(err);
    //   }
    //   );
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

  EditForm(id) {
    return this.http.get<Deposit>(this.ServerUrl + 'deposit/edit?depositId=' + id, this.httpOptions).subscribe(
      (data) => {
        this.model = data;
        let i;
        let j;
        setTimeout( () => {
        for (i = 0; i <= this.listarray.listFacility.length; i++) {
          for (j = 0; j <= this.model.depositFac.length; j++) {
            if (this.listarray.listFacility[i].id === this.model.depositFac[j]) {
              this.listarray.listFacility[i].check = true;
              break;
            }
          }
    } }, 500 );
      },
      (err) => console.log(err)
    );

  }
// to bind the second value and full title.
  GetTextDropDwonAdvisor(event) {
  this.model.adviser_title = event.target.options[event.target.options.selectedIndex].text;
  }
  GetTextDropDwonRegion(event) {
    this.model.region_title = event.target.options[event.target.options.selectedIndex].text;
  }
  GetTextDropDwonPropertyType(event) {
    this.model.propertyType_title = event.target.options[event.target.options.selectedIndex].text;
  }
  GetTextDropDwonKitchenService(event) {
    this.model.kitchenService_title = event.target.options[event.target.options.selectedIndex].text;
  }
  GetTextDropDwonFloorCover(event) {
    this.model.floorCover_title = event.target.options[event.target.options.selectedIndex].text;
  }

  ngOnInit() {
    const depositId: string = this.router.snapshot.queryParamMap.get('depositId');
    this.advisorarray();
    if (depositId !== null) {this.EditForm(depositId); }
  }
}
