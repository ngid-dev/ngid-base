import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { FormGroupModule } from './form-group/form-group.module';

@NgModule({
  exports: [CardModule, ButtonModule, FormGroupModule],
})
export class BasicModule {}
