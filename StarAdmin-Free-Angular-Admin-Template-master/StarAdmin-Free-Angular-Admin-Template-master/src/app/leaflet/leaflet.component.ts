import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import {circle, icon, marker, polygon} from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  lati: any = 35.6892;
  longi: any = 51.3890;

  constructor() {}
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
    marker([ 35.6892, 51.3890 ], {
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
  @Output() messageEvent = new EventEmitter<any>();
  sendMessage() {
    this.messageEvent.emit({lati: this.lati, longi: this.longi});
  }
ngOnInit() {}
  onMapReady(map: L.Map) {
    console.log(map);
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }
}
