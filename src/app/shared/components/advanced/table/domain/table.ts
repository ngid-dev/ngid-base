import { Subscription } from 'rxjs';
import { IObject } from 'src/app/core/interfaces';
import { TableModel } from '../models';
import { SortOrderType } from '../types';
import { TableColumn } from './table-column';
import { TableRow } from './table-row';

export class Table {
  public rows: Array<TableRow>;
  public columns: Array<TableColumn>;
  public isServerSide: boolean;
  public isLoading: boolean;
  public isProcessing: boolean;

  public perPage: number;
  public currentPage: number;
  public keywords: string;

  public sortField: string;
  public sortOrder: SortOrderType | null;

  public subscription: Subscription;

  private constructor(
    public model: TableModel<IObject>,
    public stringUrl: string
  ) {}

  public setStateProcessiong(): void {
    this.isProcessing = true;
  }

  public setStateReady(): void {
    this.isLoading = false;
    this.isProcessing = false;
  }

  public static create(model: TableModel<IObject>, stringUrl: string): Table {
    const table = new Table(model, stringUrl);
    table.isLoading = true;
    table.perPage = 10;
    table.currentPage = 0;
    table.isServerSide = !!stringUrl;
    table.rows = [];
    table.columns = model.columns.map((column) => TableColumn.create(column));
    if (table.isServerSide) {
      table.subscription = new Subscription();
    }
    return table;
  }
}
