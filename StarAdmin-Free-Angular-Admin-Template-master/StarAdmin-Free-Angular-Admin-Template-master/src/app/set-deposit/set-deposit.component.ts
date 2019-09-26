import { Component, OnInit} from '@angular/core';
 import {Deposit} from '../zameniform/deposit';
import {DepositService} from '../zameniform/deposit.service';
import {ActivatedRoute} from '@angular/router';

@Component({

  selector: 'app-set-deposit',
  templateUrl: './set-deposit.component.html',
  styleUrls: ['./set-deposit.component.scss']
})
export class SetDepositComponent implements OnInit {
  AddVisibleComp = true;
  MapVisibleComp = false;
  ReviewVisibleComp = false;

  constructor( public depositService: DepositService, private router: ActivatedRoute) {
  }
   Setmodel = new Deposit();
  receiveModel($event) {
    this.Setmodel.latitude = $event.lati;
    this.Setmodel.longitude = $event.longi;
    this.ReviewVisible();
  }
  MapVisible() {
    this.AddVisibleComp = false;
    this.MapVisibleComp = true;
  }
  // filling Setmodel with model.
  FillSetModel($event) {
    this.Setmodel = $event;
    console.log(this.Setmodel );
  }
  ReviewVisible() {
    this.AddVisibleComp = false;
    this.MapVisibleComp = false;
    this.ReviewVisibleComp = true;
  }
  receivePathImage(event) {
    this.Setmodel.depositImg = event;
    console.log(event);
    console.log(this.Setmodel.depositImg);
    // to make Setmodel.baseImagePath full after Setmodel.depositImg
    setTimeout(() => {
      this.Setmodel.baseImagePath = this.Setmodel.depositImg[0];
      console.log(this.Setmodel.baseImagePath);
    }, 1000);
  }
  OnSubmitAll() {
    const depositId: string = this.router.snapshot.queryParamMap.get('depositId');
    if (depositId == null) {
    return this.depositService.contactForm(this.Setmodel).subscribe(
      (data) => {
        this.Setmodel = data;
        },
        err => { console.log(err);
      }
    );
    } else {
      this.Setmodel.id = parseFloat(depositId);
      return this.depositService.EditDepositPost(this.Setmodel).subscribe(
        (data) => {
          this.Setmodel = data;
        },
        err => { console.log(err);
        }
      );
    }
  }
  ngOnInit() {

}
}
