import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActorDTO, ActoresCreacionDTO } from '../actores';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-actor',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule,RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
  
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  @Output()
  posteoFormulario = new EventEmitter<ActoresCreacionDTO>();

  @Input() modelo?: ActorDTO;

  mensajeExito: string = ''; 

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: ['', {Validators:[Validators.required]}]
  });

  obteneMensajeError(): string {
    let nombre = this.form.controls.nombre;
    let fechaNacimiento = this.form.controls.fechaNacimiento;
    if (nombre.hasError ('required')) {
      return "El campo es requerido";
    }
    if (fechaNacimiento.hasError('required')) {
      return 'La fecha de nacimiento es requerida';
    } else {
      return "";
    }
  }

  guardarCambios() {
    console.log(this.form.value);
    this.mostrarImagen = true;

    if (!this.form.valid) {
      
      return;
    }

    const actor = this.form.value as ActoresCreacionDTO;
    this.posteoFormulario.emit(actor);
    this.mensajeExito = `Actor ${actor.nombre} guardado correctamente!`;
    this.mensajeExito = `Actor ${actor.fechaNacimiento} guardado correctamente!`;
    this.form.reset();
  }
  

  archivoUrl: string | undefined;
  mostrarImagen: boolean = false;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
  
      // Leer la imagen seleccionada
      const reader = new FileReader();
      reader.onload = () => {
        this.archivoUrl = reader.result as string; 
      };
      reader.readAsDataURL(file); 
    }
  }
}
