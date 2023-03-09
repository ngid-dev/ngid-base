import { IObject } from 'src/app/core/interfaces';
import { TableModel } from '../models';
import { TableRow } from './table-row';

export class Table {
  public rows: Array<TableRow>;
  public isServerSide: boolean;
  public isLoading: boolean;
  private constructor(
    public model: TableModel<IObject>,
    public stringUrl: string
  ) {}

  public setStateLoading(): void {
    this.isLoading = true;
  }

  public setStateReady(): void {
    this.isLoading = false;
  }

  public static create(model: TableModel<IObject>, stringUrl: string): Table {
    const table = new Table(model, stringUrl);
    table.isServerSide = !!stringUrl;
    table.rows = [];
    return table;
  }
}
