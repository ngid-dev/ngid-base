import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { PluginsComponent } from './plugins.component';
import { pluginsRoutes } from './plugins.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(pluginsRoutes)],
  declarations: [PluginsComponent],
})
export class PluginsModule {}
