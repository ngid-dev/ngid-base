import { Table } from '../domain/table';
export const changePageTableAction = (
  state: Table,
  payload: { page: number }
) => {
  console.log(state);
  console.log(payload);
};
