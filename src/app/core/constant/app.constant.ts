export class AppConstant {
  public static instance: AppConstant;
  public readonly SESSION_ID = 'sid';
  public readonly LANGUAGE_KEY = 'lang';
  public readonly TOAST_TIMEOUT = 2500;

  private constructor() {}

  public static create(): AppConstant {
    if (this.instance) return this.instance;
    this.instance = new AppConstant();
    return this.instance;
  }
}
