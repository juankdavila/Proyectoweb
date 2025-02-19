import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';
import { PeliculaDTO, PeliculaCreacionDTO } from '../peliculas';
import { MatButtonModule } from '@angular/material/button';
import { actorAutoCompleteDTO } from '../../Actores/actores';
import { SelectorMultipleDTO } from '../../compartidos/component/selector-multiple/SelectorMultiples';

@Component({
  selector: 'app-crear-pelicula',
  imports: [MatButtonModule,FormularioPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Spider-Man', trailer: 'ABC', fechaLanzamiento: new Date('2018-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Acción'}
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Blue Mall'}

  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Agora Mall'},
    {llave: 3, valor: 'Acropolis'}
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    { id: 2, nombre: 'Tom Hanks', personaje: 'Forrest Gump', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
  ]


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('Crear película', pelicula);
  }
}