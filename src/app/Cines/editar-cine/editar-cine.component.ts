import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCineComponent } from '../formulario-cine/formulario-cine.component';
import { CineDTO, CinesCreacionDTO } from '../cines';
import { MapaComponent } from '../../compartidos/component/mapa/mapa.component';

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id! : number;
  
    cine:CineDTO = {
      id: 1, nombre: 'Supercines',latitud:2,longitug:5
    } 
    guardarCambios(cine: CinesCreacionDTO){
      console.log('Editar cine', cine);
       //console.log(this.form.value);
       //this.router.navigate(['/generos']);
    }
}
