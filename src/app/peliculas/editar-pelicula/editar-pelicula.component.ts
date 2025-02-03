import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaDTO, PeliculasCreacionDTO } from '../peliculas';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Titanic',
    fechaLanzamiento: new Date(1997, 12, 19),
    trailer: 'https://youtu.be/FiRVcExwBVA',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'
  };

  guardarCambios(pelicula: PeliculasCreacionDTO) {
    console.log('Editar pelicula', pelicula);
    
  }
}