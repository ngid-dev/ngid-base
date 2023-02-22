import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { LangModel } from 'src/app/shared/models';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent {
  public langs: Array<LangModel>;
  constructor() {
    super('module.admin.layout.component.header');
  }

  protected onInit(): void {
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
}
