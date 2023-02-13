import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.development';
import { Config } from './core/domains';
import { GlobalService } from './core/global/global.service';
import { Service } from './core/utils';
import { ConfigUsecase } from './shared/usecase/config.usecase';
import { GetUserByIdUsecase } from './shared/usecase/get-user-by-id.usecase';

@Injectable()
export class AppService {
  constructor(
    private _globalService: GlobalService,
    private _configUsecase: ConfigUsecase,
    private _getUserByIdUsecase: GetUserByIdUsecase,
    private _translateService: TranslateService,
    private _injector: Injector
  ) {}

  public init(): Promise<boolean> {
    return new Promise(async (resolve) => {
      await this.setLocalConfiguration();
      await this.setBackendConfiguration();
      await this.setDefaultLang();
      resolve(true);
    });
  }

  public async setLocalConfiguration(): Promise<void> {
    // set service injcetor
    Service.injector = this._injector;

    // set backend address
    this._globalService.config = Config.create(environment);

    const sessionId = localStorage.getItem(
      this._globalService.constant.SESSION_ID
    );
    if (sessionId) {
      this._globalService.session.sessionId = sessionId;
    }
  }

  public async setBackendConfiguration(): Promise<void> {
    // get additional backend config
    await this._configUsecase.execute();

    // get user by user session id
    const sessionId = localStorage.getItem(
      this._globalService.constant.SESSION_ID
    );

    if (sessionId) {
      const user = await this._getUserByIdUsecase.execute(+sessionId);
      this._globalService.session.setUser(user);
    }
  }

  public async setDefaultLang(): Promise<void> {
    const language = localStorage.getItem(
      this._globalService.constant.LANGUAGE_KEY
    );
    // set default language
    this._translateService.setDefaultLang(
      language || this._globalService.config.defaultLang
    );
  }
}
