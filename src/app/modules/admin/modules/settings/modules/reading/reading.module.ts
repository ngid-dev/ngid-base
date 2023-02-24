import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsSharedModule } from '../../shared/shared.module';
import { ReadingComponent } from './reading.component';
import { readingRoutes } from './reading.routes';

@NgModule({
  imports: [SettingsSharedModule, RouterModule.forChild(readingRoutes)],
  declarations: [ReadingComponent],
})
export class ReadingModule {}
