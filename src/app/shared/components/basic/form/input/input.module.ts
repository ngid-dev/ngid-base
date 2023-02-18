import { NgModule } from '@angular/core';
import { InputDefaultModule } from './components/default/default.module';
import { InputPasswordModule } from './components/password/password.module';

@NgModule({
  exports: [InputDefaultModule, InputPasswordModule],
})
export class InputModule {}
