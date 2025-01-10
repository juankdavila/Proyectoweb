import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-actor',
  imports: [MatButtonModule],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  router = inject(Router);

  guardarCambios(){
    this.router.navigate(['/actores'])
  }

}
