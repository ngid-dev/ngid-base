import { v4 } from 'uuid';

export class TextHelper {
  public static generateRandomId(): string {
    return v4();
  }
}
