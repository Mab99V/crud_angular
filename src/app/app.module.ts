

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login/login.component';
import { RegistroComponent } from './auth/registro/registro/registro.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    LoginComponent,
    RegistroComponent,
    ConsultaComponent,
    EditarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
