import { NgModule } from '@angular/core';
import { SelectModule } from 'src/app/shared/components/basic/form/select/select.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { AuthLayoutComponent } from './layout.component';

@NgModule({
  imports: [VendorsModule, SelectModule],
  declarations: [AuthLayoutComponent],
  exports: [AuthLayoutComponent],
})
export class AuthLayoutModule {}
