import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends BaseComponent {
  @Input() isSmallSidebarWidth: boolean;

  constructor() {
    super('module.admin.layout.component.sidebar');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
