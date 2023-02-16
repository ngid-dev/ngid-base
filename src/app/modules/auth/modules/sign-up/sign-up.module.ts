import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSharedModule } from '../../shared/shared.module';
import { SignUpComponent } from './sign-up.component';
import { signUpRoutes } from './sing-up.routes';

@NgModule({
  imports: [AuthSharedModule, RouterModule.forChild(signUpRoutes)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
