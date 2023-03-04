import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsSharedModule } from '../../shared/shared.module';
import { AddUsecase } from '../../shared/usecase/add.usecase';
import { GetByIdUsecase } from '../../shared/usecase/get-by-id.usecase';
import { UpdateUsecase } from '../../shared/usecase/update.usecase';
import { AddComponent } from './add.component';
import { addRoutes } from './add.routes';

@NgModule({
  imports: [PostsSharedModule, RouterModule.forChild(addRoutes)],
  providers: [AddUsecase, GetByIdUsecase, UpdateUsecase],
  declarations: [AddComponent],
})
export class AddModule {}
