import { TableColumnModel } from './table-column.model';
export class TableRowModel<T> {
  public records: Array<T>;
  public columns: Array<TableColumnModel>;
  private constructor() {}
}
