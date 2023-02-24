import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './permalinks.component.html',
})
export class PermalinksComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.permalinks');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
