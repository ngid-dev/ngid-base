import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './widgets.component.html',
})
export class WidgetsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.appearance.module.widgets');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
