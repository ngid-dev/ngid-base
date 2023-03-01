import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { VendorsModule } from 'src/app/shared/vendors/vendors.module';
import { RadioIsCheckedPipe } from './radio-is-checked.pipe';
import { RadioComponent } from './radio.component';

@NgModule({
  imports: [VendorsModule, PipesModule],
  declarations: [RadioComponent, RadioIsCheckedPipe],
  exports: [RadioComponent],
})
export class RadioModule {}
