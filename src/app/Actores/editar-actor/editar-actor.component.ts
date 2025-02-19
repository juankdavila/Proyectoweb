import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ActorDTO, ActoresCreacionDTO } from '../actores';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-actor',
  imports:[FormularioActoresComponent], 
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerActorPorId();
  }

  @Input({transform: numberAttribute})
  id! : number;
  actor!: ActorDTO;
  actorService= inject(ActoresService);
  router = inject(Router);

  guardarCambios(actor: ActoresCreacionDTO) {
    this.actorService.actualizarActores(this.id,actor).subscribe({
      next: (actor) => {
        this.router.navigate(['/actores']); 
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
   
  obtenerActorPorId(){
      this.actorService.ObtenerActorPorId(this.id).subscribe((actor)=>{
        console.log(actor);
        this.actor=actor;
      });
  }
}
