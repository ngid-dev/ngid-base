import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './themes.component.html',
})
export class ThemesComponent extends BaseModule {
  constructor() {
    super('module.admin.module.appearance.module.themes');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
