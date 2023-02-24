import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { PrivacySettingsComponent } from './privacy.component';
import { privacySettingsRoutes } from './privacy.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(privacySettingsRoutes)],
  declarations: [PrivacySettingsComponent],
})
export class PrivacySettingsModule {}
