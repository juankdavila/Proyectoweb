import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { ActorDTO } from '../actores';
import {MatTableModule} from '@angular/material/table';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatPaginatorModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

  
  columnaMostrar: String[] = ['id', 'nombre','fechaNacimiento', 'foto','accion'];
  
  actoresService = inject(ActoresService);
  listaActores!: ActorDTO[];
  paginacion:paginacionDTO={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number;
  
  constructor(){
    this.cargarListadoActores();
  }
  cargarListadoActores(){
    this.actoresService.obtenerActoresPaginacion(this.paginacion)
    .subscribe((respuesta:HttpResponse<ActorDTO[]>) =>{
      this.listaActores=respuesta.body as ActorDTO[]; 
      console.log(this.listaActores);
      const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
      console.log(cabecera);
      this.cantidadTotalRegistros=parseInt(cabecera,10)
      console.log(this.cantidadTotalRegistros);
    });
  }
  actualizarPaginacion(datos:PageEvent){
    console.log("PAGINACION");
    this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
    this.cargarListadoActores();
  }
  borrar(idUnico:number){
        Swal.fire({
          title: "¿Esta seguro de elimnar este registro?",
          text: "Esta accion es irreversible!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText:'Cancelar',
          confirmButtonText: "Si, quiero eliminar!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.actoresService.eliminarActores(idUnico).subscribe({
              next: (actorEliminar)=>{
                console.log(actorEliminar);
              this.cargarListadoActores();
                Swal.fire({
                  title: "Se elimino correctamente!",
                  text: "Your file has been deleted.",
                  icon: "success"
                })
              },
              error: (error:HttpErrorResponse)=>{
                if(error.status === 404){
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Lo sentimos ocurrió un error al eliminar el cine: "+error.statusText,
                  });
                }else{
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                  });
                }
              }
            });
          }
        });
      }
}
