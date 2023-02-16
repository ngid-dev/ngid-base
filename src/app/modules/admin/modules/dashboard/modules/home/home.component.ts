import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseModule {
  public currentDate: Date;

  constructor() {
    super('module.admin.module.dashboard.module.home');
  }

  protected onInit(): void {
    this.currentDate = new Date();
    this.setStateReady();
  }
}
