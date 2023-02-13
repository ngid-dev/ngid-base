export class AppConstant {
  public readonly SESSION_ID = 'sid';
  public readonly LANGUAGE_KEY = 'lang';

  private constructor() {}

  public static create(): AppConstant {
    const constant = new AppConstant();
    return constant;
  }
}
