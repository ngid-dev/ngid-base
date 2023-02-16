import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'updates',
    loadChildren: () =>
      import('./modules/updates/updates.module').then((m) => m.UpdatesModule),
  },
];
