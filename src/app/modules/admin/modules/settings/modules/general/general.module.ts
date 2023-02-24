import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { GeneralComponent } from './general.component';
import { generalRoutes } from './general.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(generalRoutes)],
  declarations: [GeneralComponent],
})
export class GeneralModule {}
