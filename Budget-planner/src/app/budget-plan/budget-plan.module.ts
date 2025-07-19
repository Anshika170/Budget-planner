import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlanRoutingModule } from './budget-plan-routing-module';
import { Income } from './income/income';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BudgetPlanRoutingModule,
    Income
  ]
})
export class BudgetPlanModule { }
