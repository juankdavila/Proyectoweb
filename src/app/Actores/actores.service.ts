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
    const formData = new FormData();
    // Añadir los datos al FormData
  formData.append('nombre', actor.nombre);
  formData.append('fechaNacimiento', actor.fechaNacimiento.toISOString().split('T')[0]); // Enviar la fecha en el formato correcto (yyyy-MM-dd)
  if (actor.foto) {
    formData.append('foto', actor.foto, actor.foto.name); // Asegúrate de enviar el archivo correctamente
  }
       return this.http.post(this.urlBase,formData);
  }
  public ObtenerActorPorId(actorId: number):Observable<ActorDTO>{
    return this.http.get<ActorDTO>(`${this.urlBase}/${actorId}`);
  }
  public actualizarActores(actorId:number,actor: ActoresCreacionDTO){
    return this.http.put(`${this.urlBase}/${actorId}`,actor);
    
  }

  

}
