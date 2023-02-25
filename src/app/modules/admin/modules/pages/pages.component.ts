import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './pages.component.html',
})
export class PagesComponent extends BaseModule {
  constructor() {
    super('module.admin.module.pages');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
