import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/basic/card/card.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [VendorsModule, CardModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class AuthCardModule {}
