import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(dashboardRoutes)],
})
export class DashboardModule {}
