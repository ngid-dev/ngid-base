import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/global/global.service';
import { IUsecase } from 'src/app/core/interfaces';
import { ConfigResponseDTO } from '../dtos';
import { ConfigModel } from '../models';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigUsecase implements IUsecase<any, Promise<ConfigModel>> {
  constructor(
    private _service: ConfigService,
    private _globalService: GlobalService
  ) {}

  execute(): Promise<ConfigModel> {
    return new Promise((resolve) => {
      this._service.getAll().subscribe({
        next: (response: ConfigResponseDTO) => {
          const model = ConfigModel.create(response);
          this._globalService.config.defaultLang = model.defaultLang;
          this._globalService.config.defaultTheme = model.defaultTheme;
          this._globalService.config.shortDate = model.shortDate;
          this._globalService.config.longDate = model.longDate;
          this._globalService.config.passwordRegex = model.passwordRegex;

          if (model.loggerLevel) {
            this._globalService.config.loggerLevel = model.loggerLevel;
          }

          resolve(model);
        },
        error: () => {
          resolve(ConfigModel.createEmpty());
        },
      });
    });
  }
}
