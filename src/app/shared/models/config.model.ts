import { LoggerLevelType } from 'src/app/core/types';
import { ConfigResponseDTO } from '../dtos';

export class ConfigModel {
  public defaultLang: string;
  public defaultTheme: string;
  public shortDate: string;
  public longDate: string;
  public passwordRegex: string;
  public loggerLevel: LoggerLevelType;
  constructor() {}

  public static create(responseDTO: ConfigResponseDTO): ConfigModel {
    const model = new ConfigModel();
    model.defaultLang = responseDTO.default_lang;
    model.defaultTheme = responseDTO.default_theme;
    model.shortDate = responseDTO.short_date;
    model.longDate = responseDTO.long_date;
    model.passwordRegex = responseDTO.password_regex;
    model.loggerLevel = responseDTO.logger_level;
    return model;
  }

  public static createEmpty(): ConfigModel {
    return new ConfigModel();
  }
}
