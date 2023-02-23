import { NgModule } from '@angular/core';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { AdminLayoutComponent } from './layout.component';

@NgModule({
  imports: [
    VendorsModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    BreadcrumbModule,
  ],
  declarations: [AdminLayoutComponent],
  exports: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
