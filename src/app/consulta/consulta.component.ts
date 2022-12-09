import { Empleados } from './../model/Empleados';


import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
 


  constructor( private auth: AuthService, private router:Router) { }
  
  empleados: any;
  

  ngOnInit(): void {
    this.auth.getEmpleados().subscribe(data =>{
      
      this.empleados = data;
      
    })
  }

  regreso(){
    this.router.navigateByUrl('/crud'); 
  }

  

  
 
}
