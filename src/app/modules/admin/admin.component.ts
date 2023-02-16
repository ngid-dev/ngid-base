import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseModule } from 'src/app/core/base';
import { LangModel } from 'src/app/shared/models';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent extends BaseModule {
  public currentDate: Date;
  public langs: Array<LangModel>;
  constructor(public translateService: TranslateService) {
    super('module.admin');
  }

  onInit(): void {
    this.buildFormGroup();
    this.currentDate = new Date();
    this.setStateInitialization();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  private setStateInitialization(): void {
    this.langs = LangModel.createList();
  }

  public handleChangeLang(event: Event, lang: LangModel) {
    event.preventDefault();
    localStorage.setItem(this.globalService.constant.LANGUAGE_KEY, lang.code);
    this.translateService.setDefaultLang(lang.code);
  }

  public handleSignIn(): void {
    localStorage.setItem(this.globalService.constant.SESSION_ID, '1');
  }
}
