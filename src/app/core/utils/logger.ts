import { GlobalService } from '../global/global.service';
import { LoggerLevelType } from '../types';
import { Service } from './service';

export class Logger {
  private _levelType: LoggerLevelType;
  private _instanceName: string;
  constructor(classInstance: any) {
    this._instanceName = classInstance.__proto__.constructor.name;
    this._levelType =
      Service.injector.get(GlobalService).config.loggerLevel || 'OFF';
  }

  public debug(...args: any[]): void {
    this.writeLog(args, 'DEBUG', '#e6e6e6');
  }

  public info(...args: any[]): void {
    this.writeLog(args, 'INFO', '#1abc9c');
  }

  public warn(...args: any[]): void {
    this.writeLog(args, 'WARN', '#f1c40f');
  }

  public error(...args: any[]): void {
    this.writeLog(args, 'ERROR', '#e74c3c');
  }

  public fatal(...args: any[]): void {
    this.writeLog(args, 'FATAL', '#c0392b');
  }

  private writeLog(...args: any[]): void {
    if (this.isShowLog(args[1])) {
      console.group(
        `%c[ ${args[1]} ]: ${this._instanceName}`,
        `color: ${args[2]}`
      );
      console.log(...args[0]);
      console.groupEnd();
    }
  }

  private isShowLog(levelType: LoggerLevelType): boolean {
    const levelTypes: Array<LoggerLevelType> = [
      'DEBUG',
      'INFO',
      'WARN',
      'ERROR',
      'FATAL',
    ];

    const indexOfLevelType = levelTypes.findIndex((lT) => lT === levelType);
    const indexOfLoggerLevelType = levelTypes.findIndex(
      (lT) => lT === this._levelType
    );
    return (
      indexOfLevelType >= indexOfLoggerLevelType && this._levelType !== 'OFF'
    );
  }
}
