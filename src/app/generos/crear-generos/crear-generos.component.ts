import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GenerosCreacionDTO } from '../generos';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import { MatSnackBar} from '@angular/material/snack-bar';
import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule,FormularioGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  generosService = inject(GenerosService);
  router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  guardarCambios(genero: GenerosCreacionDTO){
    console.log('Insertar genero', genero);
    this.generosService.crearGeneros(genero).subscribe({
      next: (genero)=>{
        this.router.navigate(['/generos']);
        this.openSnackBar(" Se guardo con exito el registro de genero");
      },
      error: (error:HttpErrorResponse) => {
        if (error.error === 404) {
          this.openSnackBar("El género no fue encontrado")
        } else {
        this.openSnackBar('Ocurrió un error desconocido');
        }
      }
    });

  }
  openSnackBar( message: string){
    this._snackBar.open(message, "",{
      duration: 4 *1000,
    });
  }
}
