import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/checkbox.module';
import { InputModule } from './input/input.module';

@NgModule({
  exports: [InputModule, CheckboxModule],
})
export class FormModule {}
