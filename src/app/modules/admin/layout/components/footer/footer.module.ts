import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [VendorsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
