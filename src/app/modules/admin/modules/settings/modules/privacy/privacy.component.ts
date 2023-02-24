import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './privacy.component.html',
})
export class PrivacySettingsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.privacy');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
