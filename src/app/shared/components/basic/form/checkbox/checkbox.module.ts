import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
