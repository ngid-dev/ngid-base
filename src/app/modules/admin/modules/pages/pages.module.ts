import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from '../../shared/shared.module';
import { PagesComponent } from './pages.component';
import { pagesRoutes } from './pages.routes';

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(pagesRoutes)],
  declarations: [PagesComponent],
})
export class PagesModule {}
