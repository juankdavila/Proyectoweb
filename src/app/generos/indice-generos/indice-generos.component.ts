import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../generos';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  columnaMostrar: String[] = ['id', 'Nombre','accion'];
  
generos = inject(GenerosService);
listaGeneros!: GeneroDTO[];
  constructor(){
    this.generos.obtenerGeneros().subscribe(generos =>{
      this.listaGeneros=generos;
  });
    
}

}
