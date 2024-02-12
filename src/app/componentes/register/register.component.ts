import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';

const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\\-]).{8,}$/;
const strongNameValidator=/(?:[a-zA-Z]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  [x: string]: any;
  registerForma = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(strongNameValidator), Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(strongPasswordPattern)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: passwordMatchValidator
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private mensaje: MessageService) { }

  get fullName() {
    return this.registerForma.controls['fullName'];
  }

  get email() {
    return this.registerForma.controls['email'];
  }

  get password() {
    return this.registerForma.controls['password'];
  }

  get confirmPassword() {
    return this.registerForma.controls['confirmPassword'];
  }

  enviarRegistro() {
    const data = { ...this.registerForma.value }
    delete data.confirmPassword
    this.auth.registerUser(data as User).subscribe(
      response => {console.log(response)
      this.mensaje.add({ 
      severity: 'success', 
      summary: 'Success', 
      detail: 'Se ha registrado el usuario ' });
      this.router.navigate(['login']);
      },

      error => console.log(error)
    )
  }
}
