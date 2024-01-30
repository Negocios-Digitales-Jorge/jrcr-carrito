import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// Definir la expresión regular aquí
const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

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

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.loginForma.controls['email'];
  }

  get password() {
    return this.loginForma.controls['password'];
  }
}
