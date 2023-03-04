import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsSharedModule } from '../../shared/shared.module';
import { AddComponent } from './add.component';
import { addRoutes } from './add.routes';
import { AddUsecase } from './add.usecase';
import { GetByIdUsecase } from './get-by-id.usecase';
import { UpdateUsecase } from './update.usecase';

@NgModule({
  imports: [PostsSharedModule, RouterModule.forChild(addRoutes)],
  providers: [AddUsecase, GetByIdUsecase, UpdateUsecase],
  declarations: [AddComponent],
})
export class AddModule {}
