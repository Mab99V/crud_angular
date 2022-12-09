import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  admin:Admin  = new Admin();

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
     this.auth.registro(this.admin).subscribe( 
      (resp: any) => {this.router.navigateByUrl('/login');},
     )
  }
}
