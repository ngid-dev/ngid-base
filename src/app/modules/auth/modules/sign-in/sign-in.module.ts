import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSharedModule } from '../../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { signInRoutes } from './sign-in.routes';

@NgModule({
  imports: [AuthSharedModule, RouterModule.forChild(signInRoutes)],
  declarations: [SignInComponent],
})
export class SignInModule {}
