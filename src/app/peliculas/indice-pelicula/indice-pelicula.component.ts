import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-indice-pelicula',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './indice-pelicula.component.html',
  styleUrl: './indice-pelicula.component.css'
})
export class IndicePeliculaComponent {

}
