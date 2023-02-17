import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponentsModule } from './components/components.module';

@NgModule({
  exports: [SharedModule, AuthComponentsModule],
})
export class AuthSharedModule {}
