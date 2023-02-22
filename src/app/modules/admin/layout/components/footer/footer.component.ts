import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent extends BaseComponent {
  constructor() {
    super('module.admin.layout.component.footer');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
