import { Table } from '../domain/table';
import { resolveTableRowsHelper } from '../helpers';
export const searchTableAction = (
  state: Table,
  payload: { keywords: string }
) => {
  state.keywords = payload.keywords;
  resolveTableRowsHelper(state).then((rows) => {
    state.rows = rows;
    state.setStateReady();
  });
};
