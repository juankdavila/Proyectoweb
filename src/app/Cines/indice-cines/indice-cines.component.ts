import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CinesService } from '../cines.service';
import { CineDTO } from '../cines';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-indice-cines',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatPaginatorModule],
  templateUrl: './indice-cines.component.html',
  styleUrl: './indice-cines.component.css'
})
export class IndiceCinesComponent {
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
  columnaMostrar: String[] = ['id', 'nombre','accion'];

  cines = inject(CinesService);
  listaCines!: CineDTO[];
  paginacion:paginacionDTO={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number;
  constructor(){
    this.cargarlistaCines();
  }
  cargarlistaCines(){
    this.cines.obtenerCinesPaginacion(this.paginacion)
    .subscribe((respuesta:HttpResponse<CineDTO[]>) =>{
      this.listaCines=respuesta.body as CineDTO[]; 
      console.log(this.listaCines);
      const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
      console.log(cabecera);
      this.cantidadTotalRegistros=parseInt(cabecera,10)
      console.log(this.cantidadTotalRegistros);
    });
  }
  actualizarPaginacion(datos:PageEvent){
  console.log("PAGINACION");
  this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
  this.cargarlistaCines();
  }

}
