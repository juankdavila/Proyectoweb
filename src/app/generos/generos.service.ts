import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneroDTO } from './generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http = inject(HttpClient);


  constructor() { }
  public obtenerGeneros(): Observable<GeneroDTO[]> { 
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos");}
      
      /*{id: 1, nombre:'Drama'},
      {id: 2, nombre:'Ficcion'},
      {id: 3, nombre:'Comedia'}*/
}
