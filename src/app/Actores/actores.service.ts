import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { construirQueryParams } from '../compartidos/component/Funciones/construirQueryParams';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';
import { ActorDTO, ActoresCreacionDTO } from './actores';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private http = inject(HttpClient);
  private urlBase= "http://apicodersnet.runasp.net/api/actores";
  constructor() { }
  public obtenerActoresPaginacion(paginacion: paginacionDTO): 
                                  Observable<HttpResponse<ActorDTO[]>>{
    let queryparams = construirQueryParams(paginacion);
    return this.http.get<ActorDTO[]>(`${this.urlBase}`
      ,{params:queryparams, observe:'response'}
    );
  }
  public eliminarActores(actorId: number){
    return this.http.delete(`${this.urlBase}/${actorId}`);
  }
  public crearActores(actor: ActoresCreacionDTO){
    return this.http.post(this.urlBase,actor);
  }
  public ObtenerActorPorId(actorId: number):Observable<ActorDTO>{
    return this.http.get<ActorDTO>(`${this.urlBase}/${actorId}`);
  }
  public actualizarActores(actorId:number,actor: ActoresCreacionDTO){
    return this.http.put(`${this.urlBase}/${actorId}`,actor);
    
  }

  

}
