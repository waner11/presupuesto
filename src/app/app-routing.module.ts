import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoPresupuestoComponent } from './calculo-presupuesto/calculo-presupuesto.component';

const routes: Routes = [
  { path: 'calculo', component: CalculoPresupuestoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
