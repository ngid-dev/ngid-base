import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './plugins.component.html',
})
export class PluginsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.plugins');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
