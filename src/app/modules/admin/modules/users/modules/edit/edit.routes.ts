import { Routes } from '@angular/router';
import { EditUserComponent } from './edit.component';

export const editUserRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users',
  },
  {
    path: ':id',
    component: EditUserComponent,
  },
];
