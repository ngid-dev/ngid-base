import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../global/global.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _globalService: GlobalService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isFullUrl = !!req.url.includes('://');

    const url = isFullUrl
      ? req.url
      : `${this._globalService.config.backendAddress}${req.url}`;

    console.log(`[${req.method}]: ${url}`);

    let headers = req.headers;

    if (this._globalService.session.isLoggedIn) {
      headers = headers.append(
        'Authorization',
        `Bearer ${this._globalService.session.sessionId}`
      );
    }

    req = req.clone({ url, headers });

    return next.handle(req);
  }
}
