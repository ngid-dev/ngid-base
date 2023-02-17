import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';

@NgModule({
  exports: [CardModule, ButtonModule],
})
export class BasicModule {}
