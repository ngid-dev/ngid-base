import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-sidebar-sub-menu',
  templateUrl: './sub-menu.component.html',
})
export class SidebarSubMenuComponent extends BaseComponent {
  @Input() menus: Array<any>;
  constructor() {
    super('module.admin.layout.component.sidebar.component.sub-menu');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
