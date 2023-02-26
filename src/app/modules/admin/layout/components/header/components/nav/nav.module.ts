import { NgModule } from '@angular/core';
import { DropdownModule } from 'src/app/shared/components/advanced/dropdown/dropdown.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [VendorsModule, DropdownModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
