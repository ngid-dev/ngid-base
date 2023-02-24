import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { DiscussionSettingsComponent } from './discussion.component';
import { discussionSettingsRoutes } from './discussion.routes';

@NgModule({
  imports: [
    SettingsSharedModule,
    RouterModule.forChild(discussionSettingsRoutes),
  ],
  declarations: [DiscussionSettingsComponent],
})
export class DiscussionSettingsModule {}
