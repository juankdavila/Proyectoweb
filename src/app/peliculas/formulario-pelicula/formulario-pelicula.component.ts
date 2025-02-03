import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { PeliculasCreacionDTO, PeliculaDTO } from '../peliculas';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { fechaNoPuedeSerFutura } from '../../compartidos/component/Funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { InputImgComponent } from "../../compartidos/component/input-img/input-img.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent,RouterLink],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      
    }
  }

  @Output()
  posteoFormulario = new EventEmitter<PeliculasCreacionDTO>();

  @Input()
  modelo?: PeliculaDTO;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['', { validators: [Validators.required] }],
    fechaLanzamiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    }),
    trailer: ['', { validators: [Validators.required] }],
    poster: new FormControl<File | string | null>(null)
  });

  obtenerErrorCampoTitulo(): string {
    let titulo = this.form.controls.titulo;
    if (titulo.hasError('required')) {
      return "El campo es requerido";
    } else {
      return "";
    }
  }

  obtenerErrorCampoFechaLanzamiento(): string {
    let campo = this.form.controls.fechaLanzamiento;
    if (campo.hasError('futuro')) {
      return campo.getError('futuro').mensaje;
    }
    if (campo.hasError('required')) {
      return "El campo es requerido";
    } else {
      return "";
    }
  }

  obtenerErrorCampoTrailer(): string {
    let campo = this.form.controls.trailer;
    if (campo.hasError('required')) {
      return "El campo es requerido";
    } else {
      return "";
    }
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const pelicula = this.form.value as PeliculasCreacionDTO;
    this.posteoFormulario.emit(pelicula);
  }
  esUrlValida(url: string): boolean {
    return url?.endsWith('.mp4') ?? false;
  }
  abrirEnNuevaVentana(url: string) {
    window.open(url, '_blank');
  }

  archivoSeleccionado(file: File) {
    this.form.controls.poster.setValue(file);
  }
}