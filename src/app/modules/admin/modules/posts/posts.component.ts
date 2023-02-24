import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './posts.component.html',
})
export class PostsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.posts');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
