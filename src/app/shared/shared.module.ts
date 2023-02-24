import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { VendorsModule } from './vendors/vendors.module';

@NgModule({
  exports: [VendorsModule, ComponentsModule, DirectivesModule],
})
export class SharedModule {}
