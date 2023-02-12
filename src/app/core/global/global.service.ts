import { Injectable } from '@angular/core';
import { Config, Session } from '../domains';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public config: Config;
  public session: Session;
  constructor() {}
}
