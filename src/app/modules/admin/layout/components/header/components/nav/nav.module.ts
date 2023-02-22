import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
