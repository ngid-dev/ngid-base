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
      let query = `?_sort=${state.sortField || 'created_at'}&_order=${
        state.sortOrder || 'DESC'
      }&_page=${state.currentPage}&_limit=${state.perPage}`;
      if (state.keywords) {
        query += `&q=${state.keywords}`;
      }

      httpClient
        .get<Array<IObject>>(`${state.stringUrl}${query}`)
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
