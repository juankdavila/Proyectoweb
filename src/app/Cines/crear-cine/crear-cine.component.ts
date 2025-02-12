import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CinesCreacionDTO } from '../cines';
import { FormularioCineComponent } from '../formulario-cine/formulario-cine.component';


@Component({
  selector: 'app-crear-cine',
  imports: [MatButtonModule,FormularioCineComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
router = inject(Router);

guardarCambios(cine: CinesCreacionDTO){
  console.log('Crear cine:', cine);
  //this.router.navigate(['Insertar cines', cine]);
}
}
