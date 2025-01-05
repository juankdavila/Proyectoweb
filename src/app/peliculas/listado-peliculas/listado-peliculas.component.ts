import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from '../../compartidos/component/listado-generico/listado-generico.component';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [CommonModule,ListadoGenericoComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  @Input({required:true}) listadoPeliculas: any=[];
  
agregarPelicula(){
    this.listadoPeliculas.push({
      titulo: "Piratas del Caribe",
      fechaLanzamiento: new Date(2029-3-2),
      precio: 200.00,
      poster: ""
    })    
  }
RemoverPelicula(pelicula : any){
  const indice = this.listadoPeliculas.findIndex((peliculaActual:any)=> peliculaActual.titulo === pelicula.titulo);
  this.listadoPeliculas.splice(indice,1);
}
}
