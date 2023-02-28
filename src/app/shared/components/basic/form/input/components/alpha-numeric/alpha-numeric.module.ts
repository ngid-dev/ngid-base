import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputAlphaNumericComponent } from './alpha-numeric.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputAlphaNumericComponent],
  exports: [InputAlphaNumericComponent],
})
export class InputAlphaNumericModule {}
