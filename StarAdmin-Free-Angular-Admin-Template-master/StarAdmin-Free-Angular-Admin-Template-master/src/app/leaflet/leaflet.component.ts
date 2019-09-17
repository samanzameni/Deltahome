import { Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {circle, icon, marker, polygon} from 'leaflet';




@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {


  constructor() {}



   layOsm: L.TileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map-Name',
    detectRetina: true
  });
  // Values to bind to Leaflet Directive
  leafletOptions: L.MapOptions = {
    zoom: 6,
    center: L.latLng(35.6892, 51.3890)
  };
  baseLayers: {[layerName: string]: L.Layer} = {
    'openstreetmap': this.layOsm
  };
  layersControlOptions: L.ControlOptions = { position: 'bottomright' };
  private lat1: number;
  private lng1: number;

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
      riseOnHover: true,
    }).on('dragend', (e) => {
     this.lat1 = e.target.getLatLng().lat;
    this.lng1 = e.target.getLatLng().lng;

      console.log(this.lat1 + '  ' + this.lng1);
    })
  ];
ngOnInit() {}

  onMapReady(map: L.Map) {
    console.log(map);
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }





}





