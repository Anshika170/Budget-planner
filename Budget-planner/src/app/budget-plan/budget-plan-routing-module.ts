import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { SideNav } from './side-nav/side-nav';
import { Dashboard } from './dashboard/dashboard';
import { Income } from './income/income';

const routes: Routes = [
  {path:'login',component: Login},
  {path:'side-nav',component: SideNav},  
  {path:'dashboard',component:Dashboard},
  {path:'income',component: Income}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlanRoutingModule { }
