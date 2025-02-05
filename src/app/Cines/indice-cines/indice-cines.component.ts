import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CinesService } from '../cines.service';
import { CineDTO } from '../cines';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-indice-cines',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-cines.component.html',
  styleUrl: './indice-cines.component.css'
})
export class IndiceCinesComponent {
  columnaMostrar: String[] = ['id', 'nombre','accion'];
    cines = inject(CinesService);
    listaCines!: CineDTO[];
      constructor(){
        this.cines.obtenerCines().subscribe(cines =>{
          this.listaCines=cines;
      });
    }

}
