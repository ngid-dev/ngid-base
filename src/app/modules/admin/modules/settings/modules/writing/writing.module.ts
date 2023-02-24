import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { WritingComponent } from './writing.component';
import { writingRoutes } from './writing.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(writingRoutes)],
  declarations: [WritingComponent],
})
export class WritingsModule {}
