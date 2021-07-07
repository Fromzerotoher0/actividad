import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private Aservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  Usuario:User={
    usuario:'',
    contrasena:''
  }


  login(usuario:string,contrasena:string){
    this.Usuario = {
      usuario:usuario,
      contrasena:contrasena};
      this.Aservice.login().subscribe((resp) =>{
        
        console.log(resp) 
      if(resp.id){
        this.router.navigate(['/tabla/listar']);
      }else{
        this.router.navigate(['/']);
      }
      
      })
  }
}
