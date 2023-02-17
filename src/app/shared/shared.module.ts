import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { VendorsModule } from './vendors/vendors.module';

@NgModule({
  exports: [VendorsModule, ComponentsModule],
})
export class SharedModule {}
