import { EditarComponent } from './editar/editar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { RegistroComponent } from './auth/registro/registro/registro.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'crud',component:EmpleadosComponent},
  {path: 'consulta',component:ConsultaComponent},
  {path:'editar/:id',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
