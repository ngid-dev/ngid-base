import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [VendorsModule, RouterModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
