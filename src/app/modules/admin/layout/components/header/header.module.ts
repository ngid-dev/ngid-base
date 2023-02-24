import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { NavModule } from './components/nav/nav.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    VendorsModule,
    RouterModule,
    UserProfileModule,
    NavModule,
    DirectivesModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
