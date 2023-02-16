import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { UpdatesComponent } from './updates.component';
import { updatesRoutes } from './updates.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(updatesRoutes)],
  declarations: [UpdatesComponent],
})
export class UpdatesModule {}
