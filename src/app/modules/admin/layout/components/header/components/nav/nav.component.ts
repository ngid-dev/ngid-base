import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { LangModel } from 'src/app/shared/models';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent extends BaseComponent {
  public langs: Array<LangModel>;
  constructor() {
    super('module.admin.layout.component.header.component.nav');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.langs = LangModel.createList();
  }

  public handleChangeLang(lang: LangModel) {
    this.globalService.changeLang(lang.code);
  }
}
