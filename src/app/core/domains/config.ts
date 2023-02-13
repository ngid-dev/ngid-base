import { IEnvirontment } from '../interfaces';

export class Config {
  public backendAddress: string;
  public defaultLang: string;
  public defaultTheme: string;
  public shortDate: string;
  public longDate: string;
  public passwordRegex: string;
  private constructor() {}

  public static create(environment: IEnvirontment): Config {
    const config = new Config();
    config.backendAddress = environment.backendAddress;
    return config;
  }

  public static createEmpty(): Config {
    return new Config();
  }
}
