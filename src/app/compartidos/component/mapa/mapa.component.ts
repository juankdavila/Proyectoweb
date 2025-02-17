import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, Marker, marker, MarkerOptions, tileLayer } from 'leaflet';
import { Coordenada } from './coordenadas';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  ngOnInit(): void{
    this.capas=this.coordenadasIniciales.map(valor =>{
      const marcador = marker([valor.latitud,valor.longitud],this.markerOptions);
      return marcador;
    });
  }
    @Input()
    coordenadasIniciales:Coordenada[] = [];
    @Output()
    CoordenadaSeleccionada = new EventEmitter<Coordenada>();

  
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(-2.227457, -79.901634)
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
      this.CoordenadaSeleccionada.emit({latitud,longitud});
  }
  
}

