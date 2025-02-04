import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { ActorDTO } from '../actores';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
  columnaMostrar: String[] = ['id', 'nombre','fechaNacimiento', 'foto','accion'];
  actores = inject(ActoresService);
  listaActores!: ActorDTO[];
    constructor(){
      this.actores.obtenerActores().subscribe(actores =>{
        this.listaActores=actores;
    });
  }

}
