import { IEnvirontment } from '../interfaces';
import { LoggerLevelType } from '../types';

export class Config {
  public backendAddress: string;
  public defaultLang: string;
  public defaultTheme: string;
  public shortDate: string;
  public longDate: string;
  public passwordRegex: string;
  public loggerLevel: LoggerLevelType;
  private constructor() {}

  public static create(environment: IEnvirontment): Config {
    const config = new Config();
    config.backendAddress = environment.backendAddress;
    config.loggerLevel = environment.loggerLevel;
    return config;
  }

  public static createEmpty(): Config {
    return new Config();
  }
}
