import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './add.component.html',
})
export class AddUserComponent extends BaseModule {
  constructor() {
    super('module.admin.module.users.module.add');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
