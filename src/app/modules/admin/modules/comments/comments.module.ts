import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { CommentsComponent } from './comments.component';
import { commentsRoutes } from './comments.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(commentsRoutes)],
  declarations: [CommentsComponent],
})
export class CommentsModule {}
