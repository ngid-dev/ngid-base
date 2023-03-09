import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { DefaultTableComponent } from './default.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [DefaultTableComponent],
  exports: [DefaultTableComponent],
})
export class DefaultTableModule {}
