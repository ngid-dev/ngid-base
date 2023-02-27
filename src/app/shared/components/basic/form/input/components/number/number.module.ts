import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { InputNumberComponent } from './number.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [InputNumberComponent],
  exports: [InputNumberComponent],
})
export class InputNumberModule {}
