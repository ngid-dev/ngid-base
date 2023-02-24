import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './media.component.html',
})
export class MediaSettingsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.media');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
