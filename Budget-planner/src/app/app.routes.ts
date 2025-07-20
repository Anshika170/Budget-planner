import { Routes } from '@angular/router';
import { Login } from './budget-plan/login/login'; // Import the Login component

export const routes: Routes = [
    {
        path: '', 
        component: Login 
    },
    {
        path: 'budgetplanner',
        loadChildren: () => import('./budget-plan/budget-plan.module').then(m => m.BudgetPlanModule)
    }
];
