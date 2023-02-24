import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { DiscussionComponent } from './discussion.component';
import { discussionRoutes } from './discussion.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(discussionRoutes)],
  declarations: [DiscussionComponent],
})
export class DiscussionModule {}
