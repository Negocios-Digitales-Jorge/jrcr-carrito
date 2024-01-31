import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';

const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\\-]).{8,}$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
[x: string]: any;
  registerForma = this.fb.group({
    fullName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern(strongPasswordPattern)]],
    confirmPassword: ['', [Validators.required]],
  },{
    validators:passwordMatchValidator
  });

  constructor(private fb: FormBuilder) {}

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
}
