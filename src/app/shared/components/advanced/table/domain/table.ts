import { TableModel } from '../models';
import { TableRow } from './table-row';

export class Table<T> {
  public rows: Array<TableRow<T>>;
  public isServerSide: boolean;
  public isLoading: boolean;
  private constructor(public model: TableModel<T>, public stringUrl: string) {}

  public setStateLoading(): void {
    this.isLoading = true;
  }

  public setStateReady(): void {
    this.isLoading = false;
  }

  public static create<T>(model: TableModel<T>, stringUrl: string): Table<T> {
    const table = new Table(model, stringUrl);
    table.isServerSide = !!stringUrl;
    table.rows = [];
    return table;
  }
}
