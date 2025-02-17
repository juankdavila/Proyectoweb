import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresCreacionDTO } from '../actores';
import { ActoresService } from '../actores.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-actor',
  imports: [MatButtonModule, FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  router = inject(Router);
  actoresService= inject(ActoresService);
    private _snackBar = inject(MatSnackBar);
  
  guardarCambios(actor: ActoresCreacionDTO){
      console.log('Insertar cine', actor);
      this.actoresService.crearActores(actor).subscribe({
        next: (actor) =>{
          console.log('Respuesta del servidor:', actor);
          this.router.navigate(['/actores']);
          this.openSnackBar("Se guardo con exito el registro de cines");
        },
        error: (error:HttpErrorResponse) => {
          // Manejar el error 404 aquí
          if (error.error === 404) {
            this.openSnackBar("El cine no fue encontrado")
          } else {
          this.openSnackBar('Ocurrió un error desconocido');
          }
        }
      });
      //console.log(this.form.value);
    }

  openSnackBar(message: string) {
    this._snackBar.open(message, "",{
      duration: 4 * 1000,
    });
  }
 

}


