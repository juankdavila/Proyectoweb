import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CineDTO, CinesCreacionDTO } from '../cines';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Coordenada } from '../../compartidos/component/mapa/coordenadas';
import { MapaComponent } from '../../compartidos/component/mapa/mapa.component';

@Component({
  selector: 'app-formulario-cine',
  imports: [MatButtonModule,MatFormFieldModule, ReactiveFormsModule, MatInputModule,RouterLink,MapaComponent],
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})
export class FormularioCineComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud});
    }
  }
//,{validators: [Validators.required, primeraLetraMayuscula()]}
  @Output()
  posteoFormulario = new EventEmitter<CinesCreacionDTO>();

  @Input() modelo?: CineDTO;

  @Input() coordenadasIniciales: Coordenada[]= [];

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['',{validators:[Validators.required]}],
    latitud: new FormControl<number | null>( null,[Validators.required]),
    longitud: new FormControl<number | null> (null,[Validators.required]),

  });
    

  obteneMensajeError(): string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return "El campo es requerido";
    }else{
      return "";
    }
    

  }
  coordenadaSeleccionada(coordenada:Coordenada){
    this.form.patchValue(coordenada);
  }

  guardarCambios() {  
    console.log(this.form.value);
    if (!this.form.valid) {
      return;
    }
  
    const cine = this.form.value as CinesCreacionDTO;
    console.log('Cine a enviar:', cine); 
    this.posteoFormulario.emit(cine); 
  }
}
