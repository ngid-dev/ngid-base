import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { SidebarMenuComponent } from './menu.component';
import { SidebarSubMenuComponent } from './sub-menu.component';

@NgModule({
  imports: [VendorsModule, RouterModule, NgbTooltipModule],
  declarations: [SidebarMenuComponent, SidebarSubMenuComponent],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
