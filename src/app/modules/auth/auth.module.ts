import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnsureNotAuthenticated } from 'src/app/core/guard/ensure-not-authenticated.guard';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { AuthSharedModule } from './shared/shared.module';

@NgModule({
  imports: [AuthSharedModule, RouterModule.forChild(authRoutes)],
  declarations: [AuthComponent],
  providers: [EnsureNotAuthenticated],
})
export class AuthModule {}
