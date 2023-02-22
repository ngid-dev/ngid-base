import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnsureAuthenticated } from 'src/app/core/guard/ensure-authenticated.guard';
import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';
import { AdminLayoutModule } from './layout/layout.module';
import { AdminSharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AdminSharedModule,
    RouterModule.forChild(adminRoutes),
    AdminLayoutModule,
  ],
  declarations: [AdminComponent],
  providers: [EnsureAuthenticated],
})
export class AdminModule {}
