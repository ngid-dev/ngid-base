import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { TagsComponent } from './tags.component';
import { tagsRoutes } from './tags.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(tagsRoutes)],
  declarations: [TagsComponent],
})
export class TagsModule {}
