import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDTO } from './actores';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private http = inject(HttpClient);
  
  
    constructor() { }
    public obtenerActores(): Observable<ActorDTO[]> { 
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/actores");
    }
}
