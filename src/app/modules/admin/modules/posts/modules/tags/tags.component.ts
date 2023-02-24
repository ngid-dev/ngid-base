import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './tags.component.html',
})
export class TagsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.posts.module.tags');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
