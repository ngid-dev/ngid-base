import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            console.log(`[Response]: ${event.status}`);
            console.log(event);
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === 500) {
            // do some stuff.
            // e.g: Redirect to 500 page or show toast or show modal
          } else if (errorResponse.status === 401) {
            // do some stuff
            // e.g: clear session and Redirect to login page
          }
        },
      })
    );
  }
}
