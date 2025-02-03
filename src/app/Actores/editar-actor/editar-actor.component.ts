import { Component, Input, numberAttribute } from '@angular/core';
import { ActorDTO, ActoresCreacionDTO } from '../actores';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';

@Component({
  selector: 'app-editar-actor',
  imports:[FormularioActoresComponent], 
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id! : number;

  actor:ActorDTO =
  {
    id: 1, 
    nombre: 'juan',
    fechaNacimiento: new Date(1984,2,14),
    foto: 'https://media.gettyimages.com/id/2108240868/es/foto/dutch-actor-and-photographer-thom-hoffman.jpg?s=612x612&w=gi&k=20&c=nAOgSVdVSnetqeafaLIvl20iWG2e62cP8SMyPZp4HiI='
  }

  guardarCambios(actor: ActoresCreacionDTO){
      console.log('Editar actor', actor);
       //console.log(this.form.value);
       //this.router.navigate(['/generos']);
    }
}
