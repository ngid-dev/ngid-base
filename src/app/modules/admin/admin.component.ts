import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { LangModel } from 'src/app/shared/models';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent extends BaseModule {
  public langs: Array<LangModel>;
  constructor() {
    super('module.admin');
  }

  onInit(): void {
    this.setStateInitialization();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.langs = LangModel.createList();
  }

  public handleChangeLang(event: Event, lang: LangModel) {
    event.preventDefault();
    this.globalService.changeLang(lang.code);
  }

  public handleSignOut(event: Event): void {
    event.preventDefault();
    this.globalService.session.reset();
    this.router.navigate(['/auth/sign-in']);
  }
}
