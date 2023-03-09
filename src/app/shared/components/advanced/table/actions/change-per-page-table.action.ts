import { Table } from '../domain/table';
export const changePerPageTableAction = (
  state: Table,
  payload: { perPage: number }
) => {
  console.log(state);
  console.log(payload);
};
