import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent extends BaseModule {
  constructor() {
    super('module.auth');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
