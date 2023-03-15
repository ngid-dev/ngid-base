import { HttpClient } from '@angular/common/http';
import { IObject } from 'src/app/core/interfaces';
import { Service } from 'src/app/core/utils';
import { ObjectHelper } from 'src/app/shared/helpers';
import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';
import { SortOrderType } from '../types';

export const resolveTableRowsHelper = (
  state: Table
): Promise<Array<TableRow>> => {
  return new Promise((resolve) => {
    if (state.isServerSide) {
      state.subscription.unsubscribe();
      const httpClient: HttpClient = Service.injector.get(HttpClient);
      let query = `?_sort=${state.sortField || 'created_at'}&_order=${
        state.sortOrder || 'DESC'
      }&_page=${state.currentPage}&_limit=${state.perPage}`;
      if (state.keywords) {
        query += `&q=${state.keywords}`;
      }

      state.subscription = httpClient
        .get<Array<IObject>>(`${state.stringUrl}${query}`)
        .subscribe((responseDtos: Array<IObject>) => {
          const records = responseDtos || [];
          const rows = records.map((record) =>
            TableRow.create({ columns: state.model.columns, record })
          );
          resolve(rows);
        });
    } else {
      let records = Array.from(state.model.records);
      // search records
      records = searchRecords(records, state.keywords, state.columns);
      // order records
      records = sortRecords(records, state.sortField, state.sortOrder);
      // paginate records
      records = records.splice(
        state.currentPage * state.perPage,
        state.currentPage * state.perPage + state.perPage
      );

      const rows = records.map((record) =>
        TableRow.create({ columns: state.model.columns, record })
      );

      resolve(rows);
    }
  });
};

const searchRecords = (
  records: Array<IObject> = [],
  keywords: string,
  columns: Array<TableColumn>
): Array<IObject> => {
  if (!keywords) return records;
  return records.filter((record) => {
    let isMatch = false;
    columns.forEach((column) => {
      if (isMatch || !column.model.field) return;
      const value = ObjectHelper.resolveValue(record, column.model.field);
      if (!value) return;
      isMatch = value.toLowerCase().includes(keywords.toLowerCase());
    });
    return isMatch;
  });
};

const sortRecords = (
  records: Array<IObject> = [],
  sortField: string,
  sortOrder: SortOrderType | null
) => {
  if (!sortField) return records;
  return records.sort((recordA: IObject, recordB: IObject) => {
    const valueA = ObjectHelper.resolveValue(recordA, sortField);
    const valueB = ObjectHelper.resolveValue(recordB, sortField);
    return valueA > valueB
      ? sortOrder === 'ASC'
        ? +1
        : -1
      : sortOrder === 'DESC'
      ? +1
      : -1;
  });
};
