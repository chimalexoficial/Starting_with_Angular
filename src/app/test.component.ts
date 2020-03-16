import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 class={{temp}} [hidden]='!mostrarParrafo' (click)="cambiarVariable()">
      test works!
    </h1>

    <input type='text' [value]='valorInput' (input)="valorInput=$event.target.value">
    <p>{{valorInput}}</p>

    <input type='text' [(ngModel)]="busqueda" (input) = "buscar()">
    <p>{{resBusqueda | json}}</p>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  temp = 'Variable Temp llamado por {{String Interpolation}}';
  // property binding para
  // convierte falso en cadena y cadena es true
  // en hidden yo espero un bool, no usar {{}} en bool
  mostrarParrafo = true;
  valorInput = 'Inicializado';
  objetos = [{id: 1, name: 'John M'}, {id: 2, name: 'Mary'}];
  resBusqueda = this.objetos;
  busqueda = ' ';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable(): void {
    this.temp = 'display-' + (Number(this.temp.split('-').pop()) + 1);
  }

  buscar(): void {
    this.resBusqueda = this.objetos.filter(element =>
      element.name.toUpperCase()
      .includes(this.busqueda.toUpperCase()));
  }

}
