import { Table } from '../domain/table';
import { changePageTableAction } from './change-page-table.action';
import { changePerPageTableAction } from './change-per-page-table.action';
import { initTableAction } from './init-table.action';
import { searchTableAction } from './search-table.action';
import { selectAllRowTableAction } from './select-all-row-table.action';
import { selectRowTableAction } from './select-row-table.action';
import { sortTableAction } from './sort-table.action';
import * as tableAction from './table.action';
export const dispatchTable = (
  state: Table,
  actions: tableAction.AllTableAction
): void => {
  switch (actions.type) {
    case tableAction.INIT_TABLE:
      initTableAction(state);
      break;
    case tableAction.SEARCH_TABLE:
      searchTableAction(state, actions.payload);
      break;
    case tableAction.SORT_TABLE:
      sortTableAction(state, actions.payload);
      break;
    case tableAction.CHANGE_PER_PAGE_TABLE:
      changePerPageTableAction(state, actions.payload);
      break;
    case tableAction.CHANGE_PAGE_TABLE:
      changePageTableAction(state, actions.payload);
      break;
    case tableAction.SELECT_ROW_TABLE:
      selectRowTableAction(state, actions.payload);
      break;
    case tableAction.SELECT_ALL_ROW_TABLE:
      selectAllRowTableAction(state, actions.payload);
      break;
    default:
      break;
  }
};
