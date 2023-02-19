import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/checkbox.module';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';

@NgModule({
  exports: [InputModule, CheckboxModule, SelectModule],
})
export class FormModule {}
