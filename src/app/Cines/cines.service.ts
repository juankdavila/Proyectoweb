import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CineDTO, CinesCreacionDTO } from './cines';
import { construirQueryParams } from '../compartidos/component/Funciones/construirQueryParams';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';


@Injectable({
  providedIn: 'root'
})
export class CinesService {

  private http = inject(HttpClient);
  private urlBase="http://apicodersnet.runasp.net/api/cines";
    
  constructor() { }
    public obtenerCinesPaginacion(paginacion: paginacionDTO): 
                                    Observable<HttpResponse<CineDTO[]>>{
      let queryparams = construirQueryParams(paginacion);
      return this.http.get<CineDTO[]>(`${this.urlBase}`
        ,{params:queryparams, observe:'response'}
      );
    }
    public eliminarCines(cineId: number){
      return this.http.delete(`${this.urlBase}/${cineId}`);
    }
    public crearCines(cine: CinesCreacionDTO){
      return this.http.post(this.urlBase,cine);
    }
    public ObtenerCinePorId(cineId: number):Observable<CineDTO>{
      return this.http.get<CineDTO>(`${this.urlBase}/${cineId}`);
    }
    public actualizarCines(cineId:number,cine: CinesCreacionDTO){
      return this.http.put(`${this.urlBase}/${cineId}`,cine)
    }

      
}
