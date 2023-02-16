import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { errorRoutes } from './error.routes';
import { ErrorSharedModule } from './shared/shared.module';

@NgModule({
  imports: [ErrorSharedModule, RouterModule.forChild(errorRoutes)],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
