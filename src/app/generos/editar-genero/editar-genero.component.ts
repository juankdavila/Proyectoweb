import { Component, inject, Input, numberAttribute } from '@angular/core';
import { GeneroDTO, GenerosCreacionDTO } from '../generos';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import { GenerosService } from '../generos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from 'express';


@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id! : number;
 generosService = inject(GenerosService);
  genero?:GeneroDTO;
  router = inject(Router);

  guardarCambios(genero: GenerosCreacionDTO){
    console.log('Editar genero', genero);
     //console.log(this.form.value);
     //this.router.navigate(['/generos']);
     this.generosService.actualizarGeneros(this.id, genero).subscribe({
      next: ()=>{
        this.router.navigate(['/generos']);
      
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
     });
  }

  obtenerGeneroPorId(){
    this.generosService.obtenerGeneroPorId(this.id).subscribe((genero) =>{
      console.log(genero);
      this.genero=genero;
    });
  }
}
