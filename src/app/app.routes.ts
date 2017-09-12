import { Routes } from '@angular/router';
// app
import { AuthenticationGuard } from './services/authenticationguard';
import { WelcomeScreenComponent } from "app/welcome-screen/welcome-screen.component";
import { HomeScreenComponent } from "app/home-screen/home-screen.component";

export const AppRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeScreenComponent,
    //    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeScreenComponent
  }
];
