import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent extends BaseModule {
  constructor() {
    super('module.admin');
  }

  onInit(): void {
    this.setStateReady();
  }
}
