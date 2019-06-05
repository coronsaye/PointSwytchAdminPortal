import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuardService as AuthGuard, AuthGuardService} from './authentication/auth-guard.service';

export const Approutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [

      {
        path: 'onboarding',
        loadChildren:
          './onboarding/onboarding.module#OnboardingModule'
      },
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      },

      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: '',
        redirectTo: '/dashboard/classic',
        pathMatch: 'full'

      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/classic', pathMatch: 'full' },


      {
        path: 'dashboard',
        loadChildren: './dashboards/dashboard.module#DashboardModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'acquiring',
        loadChildren: './acquiring/acquiring.module#AcquiringModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
