export class AppConstant {
  public static instance: AppConstant;
  public readonly SESSION_ID = 'sid';
  public readonly LANGUAGE_KEY = 'lang';
  public readonly TOAST_TIMEOUT = 2000;
  //
  public readonly CURRENCY_CODE = 'IDR';
  public readonly CURRENCY_DISPLAY = 'Rp';
  public readonly CURRENCY_DIGITS_INFO = '0.0-0';
  public readonly CURRENCY_LOCALE = '';

  private constructor() {}

  public static create(): AppConstant {
    if (this.instance) return this.instance;
    this.instance = new AppConstant();
    return this.instance;
  }
}
