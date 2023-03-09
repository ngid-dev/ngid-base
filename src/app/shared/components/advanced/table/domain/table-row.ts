import { TableRowModel } from '../models/table-row.model';
import { TableColumn } from './table-column';
export class TableRow {
  public columns: Array<TableColumn>;
  private constructor(public model: TableRowModel) {}
  public static create(model: TableRowModel): TableRow {
    const row = new TableRow(model);
    row.columns = model.columns.map((column) => TableColumn.create(column));
    return row;
  }
}
