import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { GenerosCreacionDTO } from '../generos';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule,FormularioGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router);

  guardarCambios(genero: GenerosCreacionDTO){
    this.router.navigate(['Insertar generos', genero])
    //console.log(this.form.value);
    //this.router.navigate(['/generos']);
  }
}
