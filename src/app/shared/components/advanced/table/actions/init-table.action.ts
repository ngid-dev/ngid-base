import { Table } from '../domain/table';
import { resolveTableRowsHelper } from '../helpers';
export const initTableAction = (state: Table) => {
  resolveTableRowsHelper(state).then((rows) => {
    state.rows = rows;
    state.setStateReady();
  });
};
