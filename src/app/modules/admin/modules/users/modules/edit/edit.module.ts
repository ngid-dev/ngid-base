import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { EditUserComponent } from './edit.component';
import { editUserRoutes } from './edit.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(editUserRoutes)],
  declarations: [EditUserComponent],
})
export class EditUserModule {}
