import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cine',
  imports: [MatButtonModule],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
router = inject(Router);
guardarCambios(){
  this.router.navigate(['/cines'])
}
}
