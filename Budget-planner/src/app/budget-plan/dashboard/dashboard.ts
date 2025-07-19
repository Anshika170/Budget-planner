import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNav } from '../side-nav/side-nav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,SideNav,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  //Income
  lastmonthincome=['january: Rs 1000', 'february: Rs 1200', 'march: Rs 1500'];
  currentmonthincome='Rs 2000';

  //Expense
  lastmonthexpenses=['january: Rs 800', 'february: Rs 900', 'march: Rs 1000'];
  currentmonthexpense='Rs 1200';

  //To-Do
  todos=[{description:'Buy groceries'},
    {description:'Pay bills'},
    {description:'Schedule doctor appointment'},
    {description:'Pay the house Rent'},
  ]

  constructor(public router:Router) {}

  OnIncome(){
    this.router.navigate(['/budgetplanner/income']);
  }
  
  OnExpense(){
    this.router.navigate(['/budgetplanner/expense']);
  }

  OnTodo(){
    this.router.navigate(['/budgetplanner/todo']);
  }

  totalcurrentmonthincome=2000;
  totalcurrentmonthexpense=1200;

  get totalcurrentmonthsaving(): number{

    return this.totalcurrentmonthincome- this.totalcurrentmonthexpense;
  }
}
