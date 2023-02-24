import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { PermalinksComponent } from './permalinks.component';
import { permalinksRoutes } from './permalinks.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(permalinksRoutes)],
  declarations: [PermalinksComponent],
})
export class PermalinksModule {}
