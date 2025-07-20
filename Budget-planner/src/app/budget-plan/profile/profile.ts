import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SideNav } from '../side-nav/side-nav';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule,SideNav],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  profileForm:any;

constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

ngOnInit(): void {
  this.profileForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    occupation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    contact: ['', Validators.required]
  });
}

onSubmit() {
  if (this.profileForm.valid) {
    console.log("Form Save!!!",this.profileForm.value);
  } else {
    this.openSnackBar('Please fill in all fields correctly!', 'Close');
  }
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3000
  });
}



}
