import {AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
 import {ZameniformComponent} from '../zameniform/zameniform.component';
 import {Deposit} from '../zameniform/deposit';
import {LeafletComponent} from '../leaflet/leaflet.component';

@Component({

  selector: 'app-set-deposit',
  templateUrl: './set-deposit.component.html',
  styleUrls: ['./set-deposit.component.scss']
})
export class SetDepositComponent implements OnInit, AfterViewInit  {

   @ViewChild(ZameniformComponent, {static: false}) AddProperty;
  @ViewChild(LeafletComponent, {static: false}) AddLatLng;
  constructor(private cdr: ChangeDetectorRef) { }
   Setmodel = new Deposit();

  ngAfterViewInit() {
    this.Setmodel = this.AddProperty.model;
    this.Setmodel.latitude = this.AddLatLng.saman.lati;
    this.Setmodel.longitude = this.AddLatLng.saman.longi;
    this.cdr.detectChanges();
  }
  ngOnInit() {

}

}

