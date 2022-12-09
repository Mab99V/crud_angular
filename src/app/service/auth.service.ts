import { Empleados } from './../model/Empleados';

import { Injectable } from '@angular/core';
import { Admin } from '../model/Admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginA } from '../model/LoginA';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api';
  userToken ?: any;

  constructor( private http: HttpClient ) {
    this.readToken();
   }
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
     
    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      responseType: 'text'
    })
  };

  registro(admin: Admin){
        console.log(admin)
    const body = {
      nombre: admin.nombre,
      username: admin.username,
      email: admin.email,
      password: admin.password,
    };

    return this.http.post(
      `${this.url}/auth/registrar`,
      body,
      {responseType: 'text'}
    ).pipe(
      map((resp:any) => {
        return resp;
      })
    );
  }
  Login(admin:LoginA){
    const body= {
      usernameOrEmail: admin.usernameOrEmail,
      password: admin.password
    };
    return this.http.post(
      `${this.url}/auth/iniciarSesion`,
      body,
    ).pipe(
      map( (resp:any)=>{
        console.log(resp)
        
        this.saveToken(resp['tokenDeAcceso']);
        return resp;
      })
    );
  }
  Logout(){
    localStorage.removeItem('token');
  }

  private saveToken(token: any){
    this.userToken = token;
    localStorage.setItem('token', token)
  }

  readToken(){
    if ( localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }
  }

  isAuth():boolean{
    this.readToken()
    return this.userToken.length > 2;
  }


  getEmpleados(): Observable<Empleados> {

    return this.http.get<Empleados>(`${this.url}/empleados`,this.httpOptions);
  }

  getEmpleadosId(id: any): Observable<Empleados> {
    return this.http.get<Empleados>(`${this.url}/empleados/${id}`, this.httpOptions);
  }

  deleteEmpleados(id: any) {
    return this.http.delete(`${this.url}/empleados/${id}`, this.httpOptions2)
    .pipe(
      map((resp:any) => {
        return resp;
      })
    );

  }

  saveEmpleados(empleados: Empleados): Observable<Empleados>{
    return this.http.post<Empleados>(`${this.url}/empleados`, empleados,this.httpOptions);
  }

  updateEmpleados(empleados:Empleados, id:any): Observable<Empleados> {
    return this.http.put<Empleados>(`${this.url}/empleados/${id}`, empleados,this.httpOptions);
  }
}
