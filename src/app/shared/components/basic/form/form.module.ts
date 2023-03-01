import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/checkbox.module';
import { InputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { TextareaModule } from './textarea/textarea.module';

@NgModule({
  exports: [
    InputModule,
    CheckboxModule,
    SelectModule,
    TextareaModule,
    RadioModule,
  ],
})
export class FormModule {}
