import { Table } from '../domain/table';
export const selectAllRowTableAction = (
  state: Table,
  payload: { isChecked: boolean }
) => {
  console.log(state);
  console.log(payload);
};
