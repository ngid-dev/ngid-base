import { Table } from '../domain/table';
import { resolveTableRowsHelper } from '../helpers';
export const changePerPageTableAction = (
  state: Table,
  payload: { perPage: number }
) => {
  state.perPage = payload.perPage;
  resolveTableRowsHelper(state).then((rows) => {
    state.rows = rows;
    state.setStateReady();
  });
};
