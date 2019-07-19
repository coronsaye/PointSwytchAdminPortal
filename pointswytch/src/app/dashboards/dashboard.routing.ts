import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: Dashboard1Component,
        data: {
          title: 'Admin Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Admin Dashboard' }
          ]
        }
      },
      {
        path: 'management',
        component: Dashboard1Component,
        data: {
          title: 'Management Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Management Dashboard' }
          ]
        }
      },
      {
        path: 'merchant',
        component: Dashboard1Component,
        data: {
          title: 'Merchant Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Merchant Dashboard' }
          ]
        }
      },
      {
        path: 'agent',
        component: Dashboard1Component,
        data: {
          title: 'Agent Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Agent Dashboard' }
          ]
        }
      },
      {
        path: 'customer',
        component: Dashboard1Component,
        data: {
          title: 'Customer Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Customer Dashboard' }
          ]
        }
      }
    ]
  }
];
