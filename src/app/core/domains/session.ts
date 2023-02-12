export class Session {
  public sessionId: string;
  private constructor() {}

  public get isLoggedIn(): boolean {
    return !!this.sessionId;
  }

  public static create(): Session {
    const session = new Session();
    return session;
  }
}
