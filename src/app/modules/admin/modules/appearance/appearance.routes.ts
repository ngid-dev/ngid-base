import { Routes } from '@angular/router';

export const appearanceRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'themes',
  },
  {
    path: 'themes',
    loadChildren: () =>
      import('./modules/themes/themes.module').then((m) => m.ThemesModule),
    data: {
      breadcrumb: 'module.admin.module.appearance.module.themes.header',
    },
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('./modules/widgets/widgets.module').then((m) => m.WidgetsModule),
    data: {
      breadcrumb: 'module.admin.module.appearance.module.widgets.header',
    },
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('./modules/menus/menus.module').then((m) => m.MenusModule),
    data: {
      breadcrumb: 'module.admin.module.appearance.module.menus.header',
    },
  },
];
