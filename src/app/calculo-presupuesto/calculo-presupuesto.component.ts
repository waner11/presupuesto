import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../Presupuesto';

@Component({
  selector: 'app-calculo-presupuesto',
  templateUrl: './calculo-presupuesto.component.html',
  styleUrls: ['./calculo-presupuesto.component.css']
})
export class CalculoPresupuestoComponent implements OnInit {

  isPrinteable: boolean = false;

  hiddenNuevo: boolean = true;

  TextBoxVisible: boolean = false;

  FillData: boolean = false; // This to hide the textboxes when printing

  Titulo: string = "Doble click para digitar nombre de Presupuesto";
  nombrePresupuesto: string = "";

  Presupuesto: Presupuesto = new Presupuesto();

  Presupuestos: Presupuesto[] = [];

  Monto: number = 0;

  constructor() { 
    this.TextBoxVisible = false;

    if (this.Presupuestos.length != 0) {
      this.isPrinteable = true;
    } else {
      this.isPrinteable = false;
    }
  }

  ngOnInit() {
    
  }

  ColocarTitulo(): void {
    this.TextBoxVisible = !this.TextBoxVisible;
  }

  Guardar(): void {
    this.Titulo = this.nombrePresupuesto;

    this.TextBoxVisible = !this.TextBoxVisible;
  }

  Agregar() {
    var pres = new Presupuesto();

    pres.Nombre = this.Presupuesto.Nombre;
    pres.Descripcion = this.Presupuesto.Descripcion;
    pres.Monto = this.Presupuesto.Monto;

    this.Presupuestos.push(pres);

    var monto = this.Presupuestos.reduce((x, {Monto}) => x + Monto, 0);

    this.Monto = monto;
  }

  Imprimir() {
    this.FillData = true;

    setTimeout(this.Print, 500);
  }

  Print() {
    print();
  }

  NuevoPresupuesto() {

  }
}
