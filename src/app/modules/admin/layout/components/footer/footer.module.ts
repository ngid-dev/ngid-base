import { NgModule } from '@angular/core';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [VendorsModule, DirectivesModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
