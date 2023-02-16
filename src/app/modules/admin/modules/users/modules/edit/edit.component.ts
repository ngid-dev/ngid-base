import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './edit.component.html',
})
export class EditUserComponent extends BaseModule {
  public userId: number;
  constructor(private routes: ActivatedRoute) {
    super('module.admin.module.users.module.edit');
  }

  protected onInit(): void {
    this.setStateUserId();
    this.setStateReady();
  }

  private setStateUserId(): void {
    this.userId = +this.routes.snapshot.params.id;
  }
}
