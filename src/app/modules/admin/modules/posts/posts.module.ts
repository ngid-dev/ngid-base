import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { postsRoutes } from './posts.routes';
import { PostsService } from './shared/services/posts.service';
import { PostsSharedModule } from './shared/shared.module';
import { DeleteUsecase } from './shared/usecase/delete.usecase';

@NgModule({
  imports: [PostsSharedModule, RouterModule.forChild(postsRoutes)],
  providers: [PostsService, DeleteUsecase],
  declarations: [PostsComponent],
})
export class PostsModule {}
