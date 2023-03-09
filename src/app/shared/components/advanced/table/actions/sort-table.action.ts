import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
export const sortTableAction = (
  state: Table,
  payload: { column: TableColumn }
) => {
  console.log(state);
  console.log(payload);
};
