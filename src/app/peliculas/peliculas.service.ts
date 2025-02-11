import { HttpClient, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { paginacionDTO } from "../compartidos/modelos/paginacionDTO";
import { Observable } from "rxjs";
import { PeliculaDTO } from "./peliculas";
import { construirQueryParams } from "../compartidos/component/Funciones/construirQueryParams";

@Injectable({
providedIn: 'root'
})
export class PeliculasService {

private http = inject(HttpClient);

constructor() { }
public obtenerPeliculasPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<PeliculaDTO[]>> {
let queryParams = construirQueryParams(paginacion); 
return this.http.get<PeliculaDTO[]>("http://apicodersnet.runasp.net/api/Peliculas"
    ,{params:queryParams,observe: 'response'}
);
}
}