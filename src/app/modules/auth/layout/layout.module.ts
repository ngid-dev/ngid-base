import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { AuthLayoutComponent } from './layout.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [AuthLayoutComponent],
  exports: [AuthLayoutComponent],
})
export class AuthLayoutModule {}
