import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [VendorsModule, NgbDropdownModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
