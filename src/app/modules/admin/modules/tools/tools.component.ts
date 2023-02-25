import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './tools.component.html',
})
export class ToolsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.tools');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
