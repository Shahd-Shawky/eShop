import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SignIn } from './sign-in/sign-in';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'sign-in',
        component: SignIn,
    }
];