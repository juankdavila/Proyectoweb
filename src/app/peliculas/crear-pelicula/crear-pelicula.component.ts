import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  imports: [MatButtonModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  router = inject(Router);
  guardarCambios(){
    this.router.navigate(['/peliculas'])
  }

}
