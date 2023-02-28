import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputCurrencyComponent } from './currency.component';
import { ResolveCurrencyPipe } from './resolve-currency.pipe';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputCurrencyComponent, ResolveCurrencyPipe],
  providers: [CurrencyPipe],
  exports: [InputCurrencyComponent],
})
export class InputCurrencyModule {}
