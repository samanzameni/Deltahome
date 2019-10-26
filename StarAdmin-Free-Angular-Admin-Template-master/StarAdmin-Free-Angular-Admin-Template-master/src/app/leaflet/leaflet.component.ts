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
    center: L.latLng(35.6892, 51.38)
  };
  baseLayers: {[layerName: string]: L.Layer} = {
    'openstreetmap': this.layOsm
  };
  layersControlOptions: L.ControlOptions = { position: 'bottomright' };
  layers = [

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

    setTimeout(() => {
      const markerPos = new L.LatLng(this.lati, this.longi);
      const pinAnchor = new L.Point(23, 47);
      const pin = new L.Icon({ iconUrl: 'marker-icon.png', iconAnchor: pinAnchor });
      L.marker(markerPos, { icon: pin , draggable: true}).addTo(map).on('dragend', (e) => {
        this.lati = e.target.getLatLng().lat;
        this.longi = e.target.getLatLng().lng;
        console.log(this.lati + '   ' + this.longi);
      } );

      console.log(map);
      map.invalidateSize();
      }, 1000);
  }
}
