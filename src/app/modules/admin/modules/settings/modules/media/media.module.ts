import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { MediaSettingsComponent } from './media.component';
import { mediaSettingsRoutes } from './media.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(mediaSettingsRoutes)],
  declarations: [MediaSettingsComponent],
})
export class MediaSettingsModule {}
