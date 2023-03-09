import { TableRowModel } from '../models/table-row.model';
import { TableColumn } from './table-column';
export class TableRow<T> {
  public columns: Array<TableColumn>;
  private constructor(public model: TableRowModel<T>) {}
  public static create<T>(model: TableRowModel<T>): TableRow<T> {
    const row = new TableRow<T>(model);
    row.columns = model.columns.map((column) => TableColumn.create(column));
    return row;
  }
}
