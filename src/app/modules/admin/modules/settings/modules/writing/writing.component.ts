import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './writing.component.html',
})
export class WritingSettingsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.writing');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
