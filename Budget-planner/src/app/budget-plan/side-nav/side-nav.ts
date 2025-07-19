import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule, CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css'
})
export class SideNav {
  isSlideout=true;

  constructor(private router: Router) {}

  toggleSideNav():void {
    this.isSlideout = !this.isSlideout;
  }
  
  onDash(){
    this.router.navigate(['/budgetplanner/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/budgetplanner/profile']);
  }

  onHistory(){
    this.router.navigate(['/budgetplanner/history']);
  }
  onLogout(){
    this.router.navigate(['/budgetplanner/login']);
  }
}
