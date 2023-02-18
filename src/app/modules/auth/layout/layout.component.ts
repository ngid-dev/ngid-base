import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from 'src/app/core/base';
import { LangModel } from 'src/app/shared/models';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AuthLayoutComponent extends BaseComponent {
  public langs: Array<LangModel>;
  public langControl: FormControl;
  public currentYear: number;
  constructor() {
    super('module.auth.layout');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.buildFormControl();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.langs = LangModel.createList();
    this.currentYear = new Date().getFullYear();
  }

  private buildFormControl(): void {
    this.langControl = new FormControl(
      this.globalService.translateService.defaultLang
    );
  }

  public handleChangeLang(): void {
    this.globalService.changeLang(this.langControl.value);
  }
}
