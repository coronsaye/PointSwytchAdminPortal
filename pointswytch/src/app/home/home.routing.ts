import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const HomeRoutes: Routes = [
{
  path: '',
  children: [
    {
      path: '',
      redirectTo: '/home/welcome', pathMatch: 'full'
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    }
  ]
}

];
