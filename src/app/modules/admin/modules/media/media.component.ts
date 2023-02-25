import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './media.component.html',
})
export class MediaComponent extends BaseModule {
  constructor() {
    super('module.admin.module.media');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
