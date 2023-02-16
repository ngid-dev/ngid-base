import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorSharedModule } from '../../shared/shared.module';
import { NotFoundErrorComponent } from './404.component';
import { notFoundErrorRoutes } from './404.routes';

@NgModule({
  imports: [ErrorSharedModule, RouterModule.forChild(notFoundErrorRoutes)],
  declarations: [NotFoundErrorComponent],
})
export class NotFoundErrorModule {}
