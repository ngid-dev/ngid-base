import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { MediaComponent } from './media.component';
import { mediaRoutes } from './media.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(mediaRoutes)],
  declarations: [MediaComponent],
})
export class MediaModule {}
