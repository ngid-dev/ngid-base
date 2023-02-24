import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { SidebarMenuModule } from './components/menu/menu.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [VendorsModule, RouterModule, SidebarMenuModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}
