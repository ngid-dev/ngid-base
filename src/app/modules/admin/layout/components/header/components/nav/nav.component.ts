import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent extends BaseComponent {
  constructor() {
    super('module.admin.layout.component.header.component.nav');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
