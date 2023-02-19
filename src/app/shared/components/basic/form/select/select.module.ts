import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectModule {}
