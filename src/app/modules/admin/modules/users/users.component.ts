import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './users.component.html',
})
export class UsersComponent extends BaseModule {
  constructor() {
    super('module.admin.module.users');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
