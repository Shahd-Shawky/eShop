import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";
import { Clothes } from "./categories/clothes/clothes";

export const routes: Routes = [
  { 
    path: '', 
    component: Home 
  },
  { 
    path: 'signin', 
    component: SignIn 
  },
  { 
    path: 'signup', 
    component: SignUp 
  },
  {
    path: 'categories/clothes',
    component: Clothes
  }
];
