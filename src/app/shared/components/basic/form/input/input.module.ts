import { NgModule } from '@angular/core';
import { InputDefaultModule } from './components/default/default.module';
import { InputEmailModule } from './components/email/email.module';
import { InputNumberModule } from './components/number/number.module';
import { InputPasswordModule } from './components/password/password.module';

@NgModule({
  exports: [
    InputDefaultModule,
    InputPasswordModule,
    InputEmailModule,
    InputNumberModule,
  ],
})
export class InputModule {}
