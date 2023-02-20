import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../constant/app.constant';
import { Config, Session } from '../domains';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public config: Config;
  public session: Session;
  public constant: AppConstant;
  constructor(
    public translateService: TranslateService,
    public toastService: ToastService
  ) {
    this.config = Config.createEmpty();
    this.session = Session.create();
    this.constant = AppConstant.create();
  }

  public changeLang(languageCode: string): void {
    localStorage.setItem(this.constant.LANGUAGE_KEY, languageCode);
    this.translateService.setDefaultLang(languageCode);
  }
}
