import { Injectable } from '@angular/core';
import { IObject } from 'src/app/core/interfaces';
import { dispatchTable } from '../actions/dispatch-table';
import * as tableAction from '../actions/table.action';
import { Table } from '../domain/table';
import { TableModel } from '../models';

@Injectable()
export class TableService {
  private state: Table;
  constructor() {}
  public setState(model: TableModel<IObject>, stringUrl: string): Table {
    this.state = Table.create(model, stringUrl);
    return this.state;
  }

  public dispatch(actions: tableAction.AllTableAction): void {
    dispatchTable(this.state, actions);
  }
}
