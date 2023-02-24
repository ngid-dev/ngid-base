import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { MediaComponent } from './media.component';
import { mediaRoutes } from './media.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(mediaRoutes)],
  declarations: [MediaComponent],
})
export class MediaModule {}
