import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../generos';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatPaginatorModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  columnaMostrar: String[] = ['id', 'Nombre','accion'];
  
generos = inject(GenerosService);
listaGeneros!: GeneroDTO[];
paginacion:paginacionDTO={pagina:1,recordsPorPagina:5}
cantidadTotalRegistros!:number;

  constructor(){
    this.cargarlistaGeneros();
  }
  cargarlistaGeneros(){
    this.generos.obtenerGenerosPaginacion(this.paginacion)
    .subscribe((respuesta:HttpResponse<GeneroDTO[]>) =>{
      this.listaGeneros=respuesta.body as GeneroDTO[]; 
      console.log(this.listaGeneros);
      const cabecera = respuesta.headers.get("cantidad-total-registros") as string;
      console.log(cabecera);
      this.cantidadTotalRegistros=parseInt(cabecera,10)
      console.log(this.cantidadTotalRegistros);
    });
    
  }
  actualizarPaginacion(datos:PageEvent){
    console.log("PAGINACION");
    this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
    this.cargarlistaGeneros();
  }
   
}


