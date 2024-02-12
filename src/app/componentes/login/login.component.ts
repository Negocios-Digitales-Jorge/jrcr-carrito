import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Route, Router } from '@angular/router';

// Definir la expresión regular aquí
const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\\-]).{8,}$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForma = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern(strongPasswordPattern)]]
  });

  constructor(private fb: FormBuilder, 
    private authService:AuthService,
    private mensaje:MessageService,
    private router:Router) {

    }

  get email() {
    return this.loginForma.controls['email'];
  }

  get password() {
    return this.loginForma.controls['password'];
  }

  login(){
    const {email, password}=this.loginForma.value;

    this.authService.getUserByEmail(email as string).subscribe(
      response=>{
        if (response.length>0&&response[0].password===password){
          sessionStorage.setItem("email",email as string)
          this.router.navigate(['home']);
        }else{
          this.mensaje.add({ 
            severity: 'error', 
            summary: 'Error en la cuenta de usuario', 
            detail: 'Email o contraseña incorrecta' });
        }
      },
      error=>{
        this.mensaje.add({ 
          severity: 'Error', 
          summary: 'Error en la cuenta de usuario', 
          detail: 'Email o contraseña incorrecta' });
      }
    )
  }

  
}
