import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSharedModule } from 'src/app/modules/admin/shared/shared.module';
import { HomeComponentsModule } from './components/components.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { HomeWidgetsModule } from './widgets/widgets.module';

@NgModule({
  imports: [
    AdminSharedModule,
    HomeComponentsModule,
    HomeWidgetsModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
