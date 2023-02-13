import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from './core/global/global.service';
import { LangModel } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentDate: Date;
  public langs: Array<LangModel>;
  constructor(
    public globalService: GlobalService,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentDate = new Date();
    this.setStateInitialization();
  }

  private setStateInitialization(): void {
    this.langs = LangModel.createList();
  }

  public handleChangeLang(event: Event, lang: LangModel) {
    event.preventDefault();
    this.translateService.setDefaultLang(lang.code);
  }

  public handleSignIn(): void {
    localStorage.setItem('sid', '1');
  }
}
