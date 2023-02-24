import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { PermalinksSettingsComponent } from './permalinks.component';
import { permalinksSettingsRoutes } from './permalinks.routes';

@NgModule({
  imports: [
    SettingsSharedModule,
    RouterModule.forChild(permalinksSettingsRoutes),
  ],
  declarations: [PermalinksSettingsComponent],
})
export class PermalinksSettingsModule {}
