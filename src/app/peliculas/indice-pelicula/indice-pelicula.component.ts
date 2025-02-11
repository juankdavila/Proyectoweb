import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2'; 
import { PeliculaDTO } from '../peliculas';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PeliculasService } from '../peliculas.service';



@Component({
  selector: 'app-indice-pelicula',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatPaginatorModule],
  templateUrl: './indice-pelicula.component.html',
  styleUrl: './indice-pelicula.component.css'
})
export class IndicePeliculaComponent {
  borrar(){
      Swal.fire({
        title: "Esta seguro de eliminar este registro?",
        text: "Esta acción es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar!",
        confirmButtonText: "Si, quiero eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Registro eliminado.",
            icon: "success"
          });
        }
      });
  }
  columnaMostrar: String[] = ['id', 'titulo','fechaLanzamiento','trailer','poster', 'accion'];
  peliculas = inject(PeliculasService);
  
  listaPeliculas!: PeliculaDTO[];
  paginacion:paginacionDTO={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number;

  constructor(){
    this.cargarlistaPeliculas();
  }
  cargarlistaPeliculas(){
    this.peliculas.obtenerPeliculasPaginacion(this.paginacion)
    .subscribe((respuesta:HttpResponse<PeliculaDTO[]>) =>{
      this.listaPeliculas=respuesta.body as PeliculaDTO[]; 
      console.log(this.listaPeliculas);
      const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
      console.log(cabecera);
      this.cantidadTotalRegistros=parseInt(cabecera,10)
      console.log(this.cantidadTotalRegistros);
    });

  }
  actualizarPaginacion(datos:PageEvent){
    console.log("PAGINACION");
    this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
    this.cargarlistaPeliculas();
  }

}
