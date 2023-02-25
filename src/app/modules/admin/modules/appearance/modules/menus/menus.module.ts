import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppearanceSharedModule } from '../../shared/shared.module';
import { MenusComponent } from './menus.component';
import { menusRoutes } from './menus.routes';

@NgModule({
  imports: [AppearanceSharedModule, RouterModule.forChild(menusRoutes)],
  declarations: [MenusComponent],
})
export class MenusModule {}
