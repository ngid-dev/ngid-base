import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { WritingSettingsComponent } from './writing.component';
import { writingSettingsRoutes } from './writing.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(writingSettingsRoutes)],
  declarations: [WritingSettingsComponent],
})
export class WritingSettingsModule {}
