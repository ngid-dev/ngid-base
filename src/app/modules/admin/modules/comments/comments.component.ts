import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './comments.component.html',
})
export class CommentsComponent extends BaseModule {
  constructor() {
    super('module.admin.module.comments');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
