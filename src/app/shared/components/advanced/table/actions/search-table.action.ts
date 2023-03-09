import { Table } from '../domain/table';
export const searchTableAction = (
  state: Table,
  payload: { keywords: string }
) => {
  console.log(state);
  console.log(payload);
};
