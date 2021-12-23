import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Decorador
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Rtx',
    precio: 10,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid
      && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched
      && this.miFormulario?.controls.precio?.value < 0
    // && this.miFormulario?.controls.precio?.value.length != ""
    // && this.miFormulario?.controls.precio?.value.length > 0
    // El precio debe ser de 0 o mayor
  }

  // guardar( miFormulario:NgForm ){
  guardar() {
    // console.log( this.miFormulario );
    console.log('popsteo correcto');
    this.miFormulario.resetForm({
      producto: 'algo',
      precio: 0,
      existencia: 0
    });

  }

}
