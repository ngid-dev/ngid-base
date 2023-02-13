import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppService } from './app.service';

export const appInitializer = (appService: AppService): any => {
  return () => appService.init();
};

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '///assets/lang/', '.json');
}
