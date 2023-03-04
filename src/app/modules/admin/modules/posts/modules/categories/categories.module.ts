import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { categoriesRoutes } from './categories.routes';
import { CategoriesService } from './categories.service';
import { PopupFormModule } from './components/popup/form/form.module';
import { DeleteCategoryUsecase } from './usecase/delete.usecase';
import { GetAllCategoryUsecase } from './usecase/get-all.usecase';

@NgModule({
  imports: [
    AdminSharedModule,
    RouterModule.forChild(categoriesRoutes),
    PopupFormModule,
  ],
  declarations: [CategoriesComponent],
  providers: [CategoriesService, DeleteCategoryUsecase, GetAllCategoryUsecase],
})
export class CategoriesModule {}
