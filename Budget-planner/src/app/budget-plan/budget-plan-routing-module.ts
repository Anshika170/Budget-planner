import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { SideNav } from './side-nav/side-nav';
import { Dashboard } from './dashboard/dashboard';
import { Income } from './income/income';
import { Expense } from './expense/expense';
import { ToDo } from './to-do/to-do';
import { History } from './history/history';
import { Profile } from './profile/profile';

const routes: Routes = [
  {path:'login',component: Login},
  {path:'side-nav',component: SideNav},  
  {path:'dashboard',component:Dashboard},
  {path:'income',component: Income},
  {path:'expense',component: Expense},
  {path:'todo',component: ToDo},
  {path:'history',component: History},
  {path:'profile',component: Profile}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlanRoutingModule { }
