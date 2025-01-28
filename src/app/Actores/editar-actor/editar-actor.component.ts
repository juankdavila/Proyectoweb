import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActorDTO, ActoresCreacionDTO } from '../actores';

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id! : number;

  actor:ActorDTO = {
    id: 1, nombre: 'Juan',
    fechaNacimiento: '14/02/84',
    imagen: 'Proyectoweb/public/imgcintavacia.avif'
  }

  guardarCambios(actor: ActoresCreacionDTO){
      console.log('Editar actor', this.actor);
       //console.log(this.form.value);
       //this.router.navigate(['/generos']);
    }
}
