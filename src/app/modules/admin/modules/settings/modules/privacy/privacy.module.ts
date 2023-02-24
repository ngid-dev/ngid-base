import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { PrivacyComponent } from './privacy.component';
import { privacyRoutes } from './privacy.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(privacyRoutes)],
  declarations: [PrivacyComponent],
})
export class PrivacyModule {}
