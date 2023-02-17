import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { GlobalService } from 'src/app/core/global/global.service';

@Injectable()
export class EnsureAuthenticated implements CanActivateChild {
  constructor(private _globalService: GlobalService, private _router: Router) {}
  canActivateChild(): boolean {
    const { isLoggedIn } = this._globalService.session;
    if (!isLoggedIn) {
      this._router.navigate(['/auth/sign-in']);
    }
    return isLoggedIn;
  }
}
