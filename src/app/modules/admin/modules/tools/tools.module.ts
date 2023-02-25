import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { ToolsComponent } from './tools.component';
import { toolsRoutes } from './tools.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(toolsRoutes)],
  declarations: [ToolsComponent],
})
export class ToolsModule {}
