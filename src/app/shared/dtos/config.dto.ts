import { LoggerLevelType } from 'src/app/core/types';

export class ConfigResponseDTO {
  public default_lang: string;
  public default_theme: string;
  public short_date: string;
  public long_date: string;
  public password_regex: string;
  public logger_level: LoggerLevelType;
}
