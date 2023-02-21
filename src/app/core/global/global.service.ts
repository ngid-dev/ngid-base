import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../constant/app.constant';
import { Config, Session } from '../domains';
import { IModal } from '../interfaces/modal.interface';
import { ToastService } from '../services/toast.service';
import { MODAL_CONFIG } from '../token';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public config: Config;
  public session: Session;
  public constant: AppConstant;
  constructor(
    public translateService: TranslateService,
    public toastService: ToastService,
    @Inject(MODAL_CONFIG) public modal: IModal
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
