import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppearanceSharedModule } from '../../shared/shared.module';
import { widgetsRoutes } from './widget.routes';
import { WidgetsComponent } from './widgets.component';

@NgModule({
  imports: [AppearanceSharedModule, RouterModule.forChild(widgetsRoutes)],
  declarations: [WidgetsComponent],
})
export class WidgetsModule {}
