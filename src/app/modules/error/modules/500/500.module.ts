import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorSharedModule } from '../../shared/shared.module';
import { InternalServerErrorComponent } from './500.component';
import { internalServerErrorRoutes } from './500.routes';

@NgModule({
  imports: [
    ErrorSharedModule,
    RouterModule.forChild(internalServerErrorRoutes),
  ],
  declarations: [InternalServerErrorComponent],
})
export class InternalServerErrorModule {}
