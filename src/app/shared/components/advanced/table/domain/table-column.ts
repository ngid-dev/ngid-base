import { TableColumnModel } from '../models';
export class TableColumn {
  private constructor(public model: TableColumnModel) {}
  public static create(model: TableColumnModel): TableColumn {
    const column = new TableColumn(model);
    return column;
  }
}
