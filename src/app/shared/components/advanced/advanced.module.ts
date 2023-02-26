import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PopupModule } from './popup/popup.module';

@NgModule({
  exports: [PopupModule, ModalModule, DropdownModule],
})
export class AdvancedModule {}
