import { Empleados } from './../model/Empleados';
import { AuthService } from 'src/app/service/auth.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private router: Router, private auth: AuthService){}

  datos: Empleados | undefined;
  editar = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
})

  ngOnInit():void{
    let empleado = this.activeRouter.snapshot.paramMap.get('id');
    this.auth.getEmpleadosId(empleado).subscribe(data =>{
      this.datos=data
      this.editar.setValue({
        'nombre': this.datos.nombre,
        'apellido': this.datos.nombre,
        'direccion': this.datos.direccion,
        'telefono': this.datos.telefono
      })
   })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  Guardar(form: Empleados){
    this.auth.updateEmpleados(form, this.datos?.id).subscribe(
    (resp: any) => {this.router.navigateByUrl('/consulta');},
    )
  }
  regreso(){
    this.router.navigateByUrl('/consulta'); 
  }

  
}
