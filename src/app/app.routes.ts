// import { Routes } from '@angular/router';
// import { Home } from './home/home';
// import { SignIn } from './sign-in/sign-in';
// import { SignUp } from './sign-up/sign-up';

// export const routes: Routes = [
// { path: '', component: Home },     // Home
//   { path: 'signin', component: SignIn },
//   { path: 'signup', component: SignUp },
// ];

import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp },
];
