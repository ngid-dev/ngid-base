import { NgModule } from '@angular/core';
import { VendorsModule } from './vendors/vendors.module';

@NgModule({
  exports: [VendorsModule],
})
export class SharedModule {}
