
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login/login.component';
import { RegistroComponent } from './auth/registro/registro/registro.component';
import { AddEmpleadosComponent } from './addEmpleados/add-empleados/add-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    
    EmpleadoListComponent,
    LoginComponent,
    RegistroComponent,
    AddEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
