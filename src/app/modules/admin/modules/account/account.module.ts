import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account.component';
import { accountRoutes } from './account.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(accountRoutes)],
  declarations: [AccountComponent],
})
export class AccountModule {}
