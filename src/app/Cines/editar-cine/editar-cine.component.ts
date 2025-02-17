import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CinesCreacionDTO, CineDTO } from '../cines';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";
import { Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerCinePorId();
  }

  @Input({transform: numberAttribute})
  id! : number;
  cine!: CineDTO;
  cineService= inject(CinesService);
  router = inject(Router);

  guardarCambios(cine : CinesCreacionDTO ){
    this.cineService.actualizarCines(this.id,cine).subscribe({
      next: ()=>{
        this.router.navigate(['/cines']);
      },
      error: (error:HttpErrorResponse)=>{
        console.log(error);
      }
    });
  }
  
  obtenerCinePorId(){
    this.cineService.ObtenerCinePorId(this.id).subscribe((cine)=>{
      console.log(cine);
      this.cine=cine;
    });
}

}
