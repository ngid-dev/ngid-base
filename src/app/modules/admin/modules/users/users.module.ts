import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { UsersComponent } from './users.component';
import { usersRoutes } from './users.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(usersRoutes)],
  declarations: [UsersComponent],
})
export class UsersModule {}
