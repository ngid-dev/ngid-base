import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { PostsComponent } from './posts.component';
import { postsRoutes } from './posts.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(postsRoutes)],
  declarations: [PostsComponent],
})
export class PostsModule {}
