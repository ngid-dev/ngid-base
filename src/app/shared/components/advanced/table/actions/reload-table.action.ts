import { Table } from '../domain/table';
import { resolveTableRowsHelper } from '../helpers';

export const reloadTableAction = (state: Table): void => {
  resolveTableRowsHelper(state).then((rows) => {
    state.rows = rows;
    state.setStateReady();
  });
};
