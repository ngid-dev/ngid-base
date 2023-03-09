import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PopupModule } from './popup/popup.module';
import { TableModule } from './table';

@NgModule({
  exports: [PopupModule, ModalModule, DropdownModule, TableModule],
})
export class AdvancedModule {}
