import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AdminLayoutComponent extends BaseComponent {
  public isSmallSidebarWidth: boolean;
  constructor() {
    super('module.admin.layout');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
