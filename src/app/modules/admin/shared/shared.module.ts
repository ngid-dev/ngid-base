import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponentsModule } from './components/components.module';

@NgModule({
  exports: [SharedModule, AdminComponentsModule],
})
export class AdminSharedModule {}
