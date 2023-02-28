import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputTelComponent } from './tel.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputTelComponent],
  providers: [CurrencyPipe],
  exports: [InputTelComponent],
})
export class InputTelModule {}
