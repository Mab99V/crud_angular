import { LoginA } from './../../../model/LoginA';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  remenber = false;
  admin:LoginA  = new LoginA();

  constructor(private router:Router, private api:AuthService) { }

  ngOnInit(): void {

    
   

    if(localStorage.getItem('usernameOrEmail') || localStorage.getItem('usernameOrEmail')){
    
      this.admin.usernameOrEmail = JSON.stringify(localStorage.getItem('usernameOrEmail'));
      this.remenber = true;
    }
    

  }

  Login(form: NgForm){
    console.log("enviado")
  if(form.invalid){
    
    return;
    
  }
  console.log("valido")
  this.api.Login(this.admin).subscribe(
    resp => {
       if(this.remenber){
        localStorage.setItem ('usernameOrEmail',JSON.stringify( this.admin.usernameOrEmail));
         console.log(resp)
       }
       this.router.navigateByUrl('/crud');
    }
  )
}

 
  }


