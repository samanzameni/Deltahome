import {AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
 import {ZameniformComponent} from '../zameniform/zameniform.component';
 import {Deposit} from '../zameniform/deposit';
import {DepositService} from '../zameniform/deposit.service';

@Component({

  selector: 'app-set-deposit',
  templateUrl: './set-deposit.component.html',
  styleUrls: ['./set-deposit.component.scss']
})
export class SetDepositComponent implements OnInit, AfterViewInit  {
  AddVisibleComp = true;
  MapVisibleComp = false;
  ReviewVisibleComp = false;
  @ViewChild(ZameniformComponent, {static: false}) AddProperty;

  constructor(private cdr: ChangeDetectorRef, public depositService: DepositService) { }
   Setmodel = new Deposit();

  ngAfterViewInit() {
    this.Setmodel = this.AddProperty.model;
    this.cdr.detectChanges();
  }
  receiveModel($event) {
    this.Setmodel.latitude = $event.lati;
    this.Setmodel.longitude = $event.longi;
     this.ReviewVisible();
  }
  MapVisible() {
    this.AddVisibleComp = false;
    this.MapVisibleComp = true;
  }
  ReviewVisible() {
    this.AddVisibleComp = false;
    this.MapVisibleComp = true;
    this.ReviewVisibleComp = true;
  }

  OnSubmitAll() {
    return this.depositService.contactForm(this.Setmodel).subscribe(
      (data) => {this.Setmodel = data; },
      err => { console.log(err);
      }
    );
  }
  ngOnInit() {
}

}

