import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { AuthSharedModule } from './shared/shared.module';

@NgModule({
  imports: [AuthSharedModule, RouterModule.forChild(authRoutes)],
  declarations: [AuthComponent],
})
export class AuthModule {}
