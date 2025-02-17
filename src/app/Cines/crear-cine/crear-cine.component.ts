import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CinesCreacionDTO } from '../cines';
import { FormularioCineComponent } from '../formulario-cine/formulario-cine.component';
import { CinesService } from '../cines.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-crear-cine',
  imports: [MatButtonModule,FormularioCineComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
router = inject(Router);
cinesService= inject(CinesService);
  private _snackBar = inject(MatSnackBar);

guardarCambios(cine: CinesCreacionDTO){
    console.log('Insertar cine', cine);
    this.cinesService.crearCines(cine).subscribe({
      next: (cine) =>{
        console.log('Respuesta del servidor:', cine);
        this.router.navigate(['/cines']);
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
