import { TableColumnModel } from '../models';
export class TableColumn {
  public value: any;
  private constructor(public model: TableColumnModel) {}
  public static create(model: TableColumnModel): TableColumn {
    const column = new TableColumn(model);
    return column;
  }
}
