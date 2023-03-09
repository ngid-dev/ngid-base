import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { resolveTableRowsHelper } from '../helpers';
import { SortOrderType } from '../types';
export const sortTableAction = (
  state: Table,
  payload: { column: TableColumn }
) => {
  const { field } = payload.column.model;

  const sortOrder: SortOrderType | null =
    field === state.sortField
      ? state.sortOrder === 'ASC'
        ? 'DESC'
        : null
      : 'ASC';

  const sortField = sortOrder === null ? '' : field;

  state.sortField = sortField;
  state.sortOrder = sortOrder;

  resolveTableRowsHelper(state).then((rows) => {
    state.rows = rows;
    state.setStateReady();
  });
};
