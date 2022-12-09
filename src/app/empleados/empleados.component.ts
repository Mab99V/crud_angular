import { Empleados } from './../model/Empleados';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado:Empleados  = new Empleados();
  constructor(private auth:AuthService, private router:Router) {  }

  ngOnInit(): void {
  }
  exit(){
    
    this.auth.Logout();
    
    this.router.navigateByUrl('/');
  }
  consulta(){
    this.router.navigateByUrl('/consulta'); 
  }
  guardar(){
    
    this.auth.saveEmpleados(this.empleado).subscribe( 
      (resp: any) => {this.router.navigateByUrl('/consulta');},
     )
  }
}
