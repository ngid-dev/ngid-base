import { AppService } from './app.service';

export const appInitializer = (appService: AppService): any => {
  return () => appService.init();
};
