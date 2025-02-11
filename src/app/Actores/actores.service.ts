import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDTO } from './actores';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';
import { construirQueryParams } from '../compartidos/component/Funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private http = inject(HttpClient);
  
  
    constructor() { }
    public obtenerActoresPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<ActorDTO[]>> {
      let queryParams = construirQueryParams(paginacion); 
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/Actores"
      ,{params:queryParams,observe: 'response'}
    );
    }
}
