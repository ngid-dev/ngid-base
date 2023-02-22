import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent {
  constructor() {
    super('module.admin.layout.component.header');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
