import { IEnvirontment } from 'src/app/core/interfaces';
import { LoggerLevelType } from 'src/app/core/types';

export const environment: IEnvirontment = {
  backendAddress: 'http://localhost:3000',
  loggerLevel: 'DEBUG' as LoggerLevelType,
};
