import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { AddUserComponent } from './add.component';
import { addUserRoutes } from './add.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(addUserRoutes)],
  declarations: [AddUserComponent],
})
export class AddUserModule {}
