import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoPresupuestoComponent } from './calculo-presupuesto/calculo-presupuesto.component';

@NgModule({
  declarations: [		
    AppComponent,
      CalculoPresupuestoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
