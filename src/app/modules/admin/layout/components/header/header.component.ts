import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent {
  @Output() onChangeSidebarWidth: EventEmitter<void>;
  constructor() {
    super('module.admin.layout.component.header');
    this.onChangeSidebarWidth = new EventEmitter();
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
