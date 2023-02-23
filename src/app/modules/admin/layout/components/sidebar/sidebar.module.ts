import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [VendorsModule, RouterModule, NgbTooltipModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
