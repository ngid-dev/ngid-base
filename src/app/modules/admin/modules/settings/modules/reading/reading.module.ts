import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { ReadingSettingsComponent } from './reading.component';
import { readingSettingsRoutes } from './reading.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(readingSettingsRoutes)],
  declarations: [ReadingSettingsComponent],
})
export class ReadingSettingsModule {}
