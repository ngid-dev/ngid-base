import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { FormGroupModule } from './form-group/form-group.module';
import { FormModule } from './form/form.module';

@NgModule({
  exports: [CardModule, ButtonModule, FormGroupModule, FormModule],
})
export class BasicModule {}
