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
        data: {
          breadcrumb: 'module.admin.module.dashboard.header',
        },
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./modules/posts/posts.module').then((m) => m.PostsModule),
        data: {
          breadcrumb: 'module.admin.module.posts.header',
        },
      },
      {
        path: 'media',
        loadChildren: () =>
          import('./modules/media/media.module').then((m) => m.MediaModule),
        data: {
          breadcrumb: 'module.admin.module.media.header',
        },
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
        data: {
          breadcrumb: 'module.admin.module.users.header',
        },
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/account/account.module').then(
            (m) => m.AccountModule
          ),
        data: {
          breadcrumb: 'module.admin.module.account.header',
        },
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
        data: {
          breadcrumb: 'module.admin.module.settings.header',
        },
      },
    ],
  },
];
