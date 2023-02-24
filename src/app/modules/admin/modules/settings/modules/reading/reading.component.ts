import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './reading.component.html',
})
export class ReadingComponent extends BaseModule {
  constructor() {
    super('module.admin.module.settings.module.reading');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
