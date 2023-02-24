import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { categoriesRoutes } from './categories.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(categoriesRoutes)],
  declarations: [CategoriesComponent],
})
export class CategoriesModule {}
