import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class SidebarMenuComponent extends BaseComponent {
  @Input() menus: Array<any>;
  @Input() isSmallSidebarWidth: boolean;
  constructor() {
    super('module.admin.layout.component.sidebar.component.menu');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
