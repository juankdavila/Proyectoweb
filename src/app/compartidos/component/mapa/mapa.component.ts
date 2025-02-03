import { Component } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, Marker, marker, MarkerOptions, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  markerOptions: MarkerOptions={
        icon: icon({
          iconSize: [25,41],
          iconAnchor:[13,41],          
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
  };

  capas: Marker<any>[]=[];

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
      const longitud = event.latlng.lng;
      this.capas=[];
      this.capas.push(marker([latitud,longitud],this.markerOptions));
  }
  
}

