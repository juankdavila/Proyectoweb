import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/component/Funciones/validaciones';
import { GeneroDTO, GenerosCreacionDTO } from '../generos';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-generos',
  imports: [MatButtonModule,MatFormFieldModule, ReactiveFormsModule, MatInputModule,RouterLink],
  templateUrl: './formulario-generos.component.html',
  styleUrl: './formulario-generos.component.css'
})
export class FormularioGenerosComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
//,{validators: [Validators.required, primeraLetraMayuscula()]}
  @Output()
  posteoFormulario = new EventEmitter<GenerosCreacionDTO>();

  @Input() modelo?: GeneroDTO;



  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['',{validators:[Validators.required]}]
  });
  






  obteneMensajeError(): string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return "El campo es requerido";
    }else{
      return "";
    }
    
    /*if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }*/
    
  }

  guardarCambios(){
    
    console.log(this.form.value);
  


    if(!this.form.valid){
      return;
    }

    const genero = this.form.value as GenerosCreacionDTO;
    this.posteoFormulario.emit(genero);

  }




}

