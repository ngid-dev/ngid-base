import { TableColumnModel } from './table-column.model';

export class TableModel<T> {
  public records: Array<T>;
  private constructor(
    public moduleCode: string,
    public columns: Array<TableColumnModel>
  ) {}
  public static create<T>(
    moduleCode: string,
    columns: Array<TableColumnModel>
  ): TableModel<T> {
    const model = new TableModel<T>(moduleCode, columns);
    model.records = [];
    return model;
  }
}
