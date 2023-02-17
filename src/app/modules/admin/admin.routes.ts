import { Routes } from '@angular/router';
import { EnsureAuthenticated } from 'src/app/core/guard/ensure-authenticated.guard';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [EnsureAuthenticated],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];
