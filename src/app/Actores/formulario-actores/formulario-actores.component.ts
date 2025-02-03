import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActoresCreacionDTO, ActorDTO } from '../actores';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { fechaNoPuedeSerFutura, primeraLetraMayuscula } from '../../compartidos/component/Funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { InputImgComponent } from "../../compartidos/component/input-img/input-img.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent,RouterLink],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {

  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Output()
  posteoFormulario = new EventEmitter<ActoresCreacionDTO>();

  @Input() 
  modelo?: ActorDTO;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['',{validators:[Validators.required]}],
    fechaNacimiento: new FormControl<Date | null>(null,{
      validators:[Validators.required,fechaNoPuedeSerFutura()]
    }),
    foto: new FormControl<File | string | null>(null)
  });
  
  obtenerErrorCampoNombre(): string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return "El campo es requerido";
    }else{
      return "";
    }
  }

  obtenerErrorCampoFechaNacimiento(): string{
    let campo = this.form.controls.fechaNacimiento;
    if(campo.hasError('futuro')){
      return campo.getError('futuro').mensaje;
    }
    if(campo.hasError('required')){
      return "El campo es requerido";
    }else{
      return "";
    }

  }

  guardarCambios(){
    console.log(this.form.value);

    if(!this.form.valid){
      return;
    }

    const actor = this.form.value as ActoresCreacionDTO;
    this.posteoFormulario.emit(actor);

  }

  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }


}