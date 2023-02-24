import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './categories.component.html',
})
export class CategoriesComponent extends BaseModule {
  constructor() {
    super('module.admin.module.posts.module.categories');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
