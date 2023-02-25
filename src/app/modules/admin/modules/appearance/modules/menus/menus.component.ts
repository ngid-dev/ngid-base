import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './menus.component.html',
})
export class MenusComponent extends BaseModule {
  constructor() {
    super('module.admin.module.appearance.module.menus');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
