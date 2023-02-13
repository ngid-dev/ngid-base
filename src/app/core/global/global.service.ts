import { Injectable } from '@angular/core';
import { AppConstant } from '../constant/app.constant';
import { Config, Session } from '../domains';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public config: Config;
  public session: Session;
  public constant: AppConstant;
  constructor() {
    this.config = Config.createEmpty();
    this.session = Session.create();
    this.constant = AppConstant.create();
  }
}
