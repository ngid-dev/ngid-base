import { EventEmitter } from '@angular/core';
import { TableColumnModel } from './table-column.model';

export class TableModel<T> {
  public records: Array<T>;
  public requestReload: EventEmitter<void>;
  private constructor(
    public moduleCode: string,
    public columns: Array<TableColumnModel>
  ) {}

  public setRecords(records: Array<T>): void {
    this.records = records;
  }

  public reload(): void {
    this.requestReload.emit();
  }

  public static create<T>(
    moduleCode: string,
    columns: Array<TableColumnModel>
  ): TableModel<T> {
    const model = new TableModel<T>(moduleCode, columns);
    model.requestReload = new EventEmitter();
    model.records = [];
    return model;
  }
}
