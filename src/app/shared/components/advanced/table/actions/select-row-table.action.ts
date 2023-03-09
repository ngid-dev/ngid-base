import { Table } from '../domain/table';
import { TableRow } from '../domain/table-row';
export const selectRowTableAction = (
  state: Table,
  payload: { row: TableRow; isChecked: boolean }
) => {
  console.log(state);
  console.log(payload);
};
