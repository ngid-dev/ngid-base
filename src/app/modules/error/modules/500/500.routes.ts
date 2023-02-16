import { Routes } from '@angular/router';
import { InternalServerErrorComponent } from './500.component';

export const internalServerErrorRoutes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];
