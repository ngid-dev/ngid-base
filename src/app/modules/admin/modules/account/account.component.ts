import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './account.component.html',
})
export class AccountComponent extends BaseModule {
  constructor() {
    super('module.admin.module.account');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
