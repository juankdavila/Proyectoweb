import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CineDTO, CinesCreacionDTO } from '../cines';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-cine',
  imports: [MatButtonModule,MatFormFieldModule, ReactiveFormsModule, MatInputModule,RouterLink],
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})
export class FormularioCineComponent {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
//,{validators: [Validators.required, primeraLetraMayuscula()]}
  @Output()
  posteoFormulario = new EventEmitter<CinesCreacionDTO>();

  @Input() modelo?: CineDTO;


  mensajeExito: string = ''; 
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

    const cine = this.form.value as CinesCreacionDTO;
    this.posteoFormulario.emit(cine);

    this.mensajeExito = `Cine ${cine.nombre} guardado correctamente!`;

    // Limpiar el formulario si es necesario
    this.form.reset();
  }
}
