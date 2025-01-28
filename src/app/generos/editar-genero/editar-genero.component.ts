import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroDTO, GenerosCreacionDTO } from '../generos';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';


@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id! : number;

  genero:GeneroDTO = {id:1, nombre:'Drama'}

  guardarCambios(genero: GenerosCreacionDTO){
    console.log('Editar genero', genero);
     //console.log(this.form.value);
     //this.router.navigate(['/generos']);
  }
}
