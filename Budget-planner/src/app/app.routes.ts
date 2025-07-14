import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'budgetplanner', loadChildren: () => import('./budget-plan/budget-plan.module').then(m => m.BudgetPlanModule)
    }
];
