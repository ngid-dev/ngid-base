import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './general.component.html',
})
export class GeneralComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.general');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
