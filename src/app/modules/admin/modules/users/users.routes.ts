import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./modules/add/add.module').then((m) => m.AddUserModule),
    data: {
      breadcrumb: 'module.admin.module.users.module.add.header',
    },
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./modules/edit/edit.module').then((m) => m.EditUserModule),
    data: {
      breadcrumb: 'module.admin.module.users.module.edit.header',
    },
  },
];
