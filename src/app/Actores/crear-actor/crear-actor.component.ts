import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  imports: [MatButtonModule, FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
router = inject(Router);

  guardarCambios(actor: ActoresCreacionDTO){
    console.log('Insertar actor', actor);
}
}
