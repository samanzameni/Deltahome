import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import {circle, icon, marker, polygon} from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor() {}

 lati: any = 35.6892;
 longi: any = 51.3890;
  @Input() latiParent: any ;
  @Input() longiParent: any ;


  @Output() messageEvent = new EventEmitter<any>();
  layOsm: L.TileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map-Name',
    detectRetina: true
  });
  // Values to bind to Leaflet Directive
  leafletOptions: L.MapOptions = {
    zoom: 11,
    center: L.latLng(35.6892, 51.3890)
  };
  baseLayers: {[layerName: string]: L.Layer} = {
    'openstreetmap': this.layOsm
  };
  layersControlOptions: L.ControlOptions = { position: 'bottomright' };
  layers = [
    circle([ 46.95, -122 ], { radius: 5000 }),
    polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([ this.lati, this.longi ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'marker-icon.png',
        shadowUrl: 'marker-shadow.png',
      }),
      draggable: true,
    }).on('dragend', (e) => {
      this.lati = e.target.getLatLng().lat;
      this.longi = e.target.getLatLng().lng;
      console.log(this.lati + '   ' + this.longi);
    } )
  ];
  sendMessage() {
    this.messageEvent.emit({lati: this.lati, longi: this.longi});
  }
ngOnInit() {
    if (this.latiParent !== 0 && this.longiParent !== 0) {
      this.lati = this.latiParent;
      this.longi = this.longiParent;
    }
console.log(this.longiParent);
  console.log(this.longi);
}
  onMapReady(map: L.Map) {
    console.log(map);
    setTimeout(() => {
      map.invalidateSize();
    }, 5000);
  }
}
