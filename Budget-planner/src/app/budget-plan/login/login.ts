import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { defaultUrlMatcher, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 loginForm: any;
 registerForm: any;
 activeForm: 'login' | 'register' = 'login';


constructor(private fb:FormBuilder,
  private router: Router,
  private snackBar: MatSnackBar
){}

ngOnInit() 
{
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], // Synchronous validators
    password: ['', Validators.required] // Synchronous validators
  });

  this.registerForm = this.fb.group({
    username: ['', Validators.required], // Synchronous validators
    email: ['', [Validators.required, Validators.email]], // Synchronous validators
    password: ['', Validators.required] // Synchronous validators
  });
}
toggleForm(form: 'login' | 'register') {
  this.activeForm= form;}

login(){
  if(this.loginForm.valid) {
    console.log('Login successful', this.loginForm.value);
    this.router.navigate(['/budgetplanner/dashboard']);

  }else{
    this.snackBar.open('Please fill in all fields correctly', 'Close', { duration: 3000 });
    //snackBar is part of Angular Material, it shows error messages
}
}

register() {
  if(this.registerForm.valid) {
    console.log('Registration successful', this.registerForm.value);
    setTimeout(() => {window.location.reload();}, 2000);
    this.router.navigate(['/budgetplanner/login']);
  } else {
    this.snackBar.open('Please fill in all fields correctly', 'Close', { duration: 3000 });
   
  }
}

}