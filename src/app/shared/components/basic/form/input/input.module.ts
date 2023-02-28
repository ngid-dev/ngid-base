import { NgModule } from '@angular/core';
import { InputAlphaNumericModule } from './components/alpha-numeric/alpha-numeric.module';
import { InputCurrencyModule } from './components/currency/currency.module';
import { InputDefaultModule } from './components/default/default.module';
import { InputEmailModule } from './components/email/email.module';
import { InputNumberModule } from './components/number/number.module';
import { InputNumericModule } from './components/numeric/numeric.module';
import { InputPasswordModule } from './components/password/password.module';

@NgModule({
  exports: [
    InputDefaultModule,
    InputPasswordModule,
    InputEmailModule,
    InputNumberModule,
    InputNumericModule,
    InputAlphaNumericModule,
    InputCurrencyModule,
  ],
})
export class InputModule {}
