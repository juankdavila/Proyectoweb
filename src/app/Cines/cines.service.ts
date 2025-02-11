import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CineDTO } from './cines';
import { construirQueryParams } from '../compartidos/component/Funciones/construirQueryParams';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';


@Injectable({
  providedIn: 'root'
})
export class CinesService {


  private http = inject(HttpClient);
    
    
  constructor() { }
      public obtenerCinesPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<CineDTO[]>> {
        let queryParams = construirQueryParams(paginacion); 
        return this.http.get<CineDTO[]>("http://apicodersnet.runasp.net/api/Cines"
        ,{params:queryParams,observe: 'response'}
      );
      }
}
