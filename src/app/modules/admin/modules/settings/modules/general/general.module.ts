import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { GeneralSettingsComponent } from './general.component';
import { generalSettingsRoutes } from './general.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(generalSettingsRoutes)],
  declarations: [GeneralSettingsComponent],
})
export class GeneralSettingsModule {}
