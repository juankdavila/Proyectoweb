import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GenerosCreacionDTO } from '../generos';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule,FormularioGenerosComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  generoService = inject(GenerosService);
  router = inject(Router);
private _snackBar = inject(MatSnackBar);
  guardarCambios(genero: GenerosCreacionDTO){
    this.generoService.crearGeneros(genero).subscribe(resulta => {
      console.log(resulta);
      this.opensSnackBar();
      this.router.navigate(['/generos']);
    })
    //console.log(this.form.value);
    //this.router.navigate(['/generos']);
  }
  opensSnackBar(){
    this._snackBar.open("Se guardo con exito el registro", "ok",{
      duration: 4 *1000,
    });
  }
}
