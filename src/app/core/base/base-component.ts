import { Component, Inject } from '@angular/core';
import { Base } from './base';

@Component({
  template: '',
})
export abstract class BaseComponent extends Base {
  protected abstract onInit(): void;
  constructor(@Inject(String) moduleCode: string) {
    super(moduleCode);
  }

  protected onBaseInit(): void {
    this.logger.debug(`Load component ${this.moduleCode}`);
    this.onInit();
  }
}
