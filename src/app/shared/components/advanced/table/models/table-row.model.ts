import { IObject } from 'src/app/core/interfaces';
import { TableColumnModel } from './table-column.model';
export class TableRowModel {
  public record: IObject;
  public columns: Array<TableColumnModel>;
  private constructor() {}
}
