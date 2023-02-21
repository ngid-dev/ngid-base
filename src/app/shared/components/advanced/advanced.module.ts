import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { PopupModule } from './popup/popup.module';

@NgModule({
  exports: [PopupModule, ModalModule],
})
export class AdvancedModule {}
