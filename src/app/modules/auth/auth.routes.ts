import { Routes } from '@angular/router';
import { EnsureNotAuthenticated } from 'src/app/core/guard/ensure-not-authenticated.guard';
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [EnsureNotAuthenticated],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./modules/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
];
