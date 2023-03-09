import { Injectable } from '@angular/core';
import { Table } from '../domain/table';
import { TableModel } from '../models';

@Injectable()
export class TableService {
  private state: Table<any>;
  constructor() {}
  public setState(model: TableModel<any>, stringUrl: string): Table<any> {
    this.state = Table.create(model, stringUrl);
    return this.state;
  }

  public dispatch(): void {
    //
  }
}
