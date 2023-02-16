import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './500.component.html',
})
export class InternalServerErrorComponent extends BaseModule {
  constructor() {
    super('module.error.module.404');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
