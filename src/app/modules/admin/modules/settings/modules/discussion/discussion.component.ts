import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './discussion.component.html',
})
export class DiscussionSettingsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.discussion');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
