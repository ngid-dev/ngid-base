import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputNumericComponent } from './numeric.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputNumericComponent],
  exports: [InputNumericComponent],
})
export class InputNumericModule {}
