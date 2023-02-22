import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [VendorsModule, NgbDropdownModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class NavModule {}
