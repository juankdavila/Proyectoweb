import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CinesService } from '../cines.service';
import { CineDTO } from '../cines';
import { MatTableDataSource,MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-indice-cines',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule],
  templateUrl: './indice-cines.component.html',
  styleUrl: './indice-cines.component.css'
})
export class IndiceCinesComponent {
  
  columnaMostrar: String[] = ['id', 'nombre', 'latitud', 'longitud','accion'];

  
  cinesService= inject(CinesService);
  listaCines!: CineDTO[];

  paginacion:paginacionDTO={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number;

  dataSource: any; 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(){
    this.cargarListadoCines();
  }
  cargarListadoCines(){
    this.cinesService.obtenerCinesPaginacion(this.paginacion)
    .subscribe((respuesta:HttpResponse<CineDTO[]>) =>{
      this.listaCines=respuesta.body as CineDTO[]; 
      console.log(this.listaCines);
      const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
      console.log(cabecera);
      this.cantidadTotalRegistros=parseInt(cabecera,10)
      this.dataSource= new MatTableDataSource(this.listaCines);
      console.log(this.cantidadTotalRegistros);

  

    });
  }
  actualizarPaginacion(datos:PageEvent){
  console.log("PAGINACION");
  this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
  this.cargarListadoCines();
  }
  borrar(idUnico:number){
      console.log("Este es el id a eliminar"+idUnico);
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
          this.cinesService.eliminarCines(idUnico).subscribe({
            next: (cineEliminar)=>{
            this.cargarListadoCines();
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
