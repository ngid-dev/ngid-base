import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './updates.component.html',
})
export class UpdatesComponent extends BaseModule {
  constructor() {
    super('module.admin.module.dashboard.module.updates');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
