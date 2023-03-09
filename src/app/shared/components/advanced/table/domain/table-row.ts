import { ObjectHelper } from 'src/app/shared/helpers';
import { TableRowModel } from '../models/table-row.model';
import { TableColumn } from './table-column';
export class TableRow {
  public columns: Array<TableColumn>;
  private constructor(public model: TableRowModel) {}
  public static create(model: TableRowModel): TableRow {
    const row = new TableRow(model);
    row.columns = model.columns.map((columnModel) => {
      const column = TableColumn.create(columnModel);
      column.value = ObjectHelper.resolveValue(model.record, columnModel.field);
      return column;
    });
    return row;
  }
}
