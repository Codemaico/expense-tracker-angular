import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { BudgetDetailsComponent } from './pages/budget-details/budget-details.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'details/:id',
        component: BudgetDetailsComponent
    },
    {
        path:'create-account',
        component: CreateAccountComponent
    }
];
