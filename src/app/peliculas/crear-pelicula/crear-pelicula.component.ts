import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';
import { PeliculasCreacionDTO } from '../peliculas';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-pelicula',
  imports: [MatButtonModule,FormularioPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
  router = inject(Router);

  guardarCambios(pelicula: PeliculasCreacionDTO) {
    this.router.navigate(['Insertar peliculas', pelicula]);
    
  }
}