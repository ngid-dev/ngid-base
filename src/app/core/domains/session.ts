import { AppConstant } from '../constant/app.constant';
import { UserModel } from '../models';

export class Session {
  public sessionId: string | null;
  public user: UserModel;

  private constructor() {}

  public setUser(user: UserModel): void {
    this.user = user;
    if (!this.user.isEmpty()) return;
    this.reset();
  }

  public get isLoggedIn(): boolean {
    return !!this.sessionId;
  }

  public reset(): void {
    this.sessionId = null;
    this.user = UserModel.createEmpty();
    localStorage.removeItem(AppConstant.create().SESSION_ID);
  }

  public static create(): Session {
    const session = new Session();
    return session;
  }
}
