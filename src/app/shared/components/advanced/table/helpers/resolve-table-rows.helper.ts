import { HttpClient } from '@angular/common/http';
import { IObject } from 'src/app/core/interfaces';
import { Service } from 'src/app/core/utils';
import { Table } from '../domain/table';
import { TableRow } from '../domain/table-row';

export const resolveTableRowsHelper = (
  state: Table
): Promise<Array<TableRow>> => {
  return new Promise((resolve) => {
    if (state.isServerSide) {
      const httpClient: HttpClient = Service.injector.get(HttpClient);
      httpClient
        .get<Array<IObject>>(
          `/posts?_sort=created_at&_order=desc&_page=${state.currentPage}&_limit=${state.perPage}`
        )
        .subscribe((responseDtos: Array<IObject>) => {
          const records = responseDtos || [];
          const rows = records.map((record) =>
            TableRow.create({ columns: state.model.columns, record })
          );
          resolve(rows);
        });
    } else {
      // resolve model records
      resolve([]);
    }
  });
};
