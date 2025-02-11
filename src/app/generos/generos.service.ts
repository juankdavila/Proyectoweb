import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { GeneroDTO, GenerosCreacionDTO } from './generos';
import { construirQueryParams } from '../compartidos/component/Funciones/construirQueryParams';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';
@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http = inject(HttpClient);
  private urlBase="http://apicodersnet.runasp.net/api/Generos" 


  constructor() { }
  public obtenerGenerosPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = construirQueryParams(paginacion); 
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos"
    ,{params:queryParams,observe: 'response'}
  );
  }
  public eliminarGeneros(id: number){
    return this.http.delete(`${this.urlBase}/${id}`)
  }
  public crearGeneros(genero: GenerosCreacionDTO){
    return this.http.post(this.urlBase,genero);
  }
  
}
