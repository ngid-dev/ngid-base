import { IAction } from 'src/app/shared/interfaces';
import { TableColumn } from '../domain/table-column';
import { TableRow } from '../domain/table-row';

export const INIT_TABLE = '[ APP TABLE ]: Init table';
export const SEARCH_TABLE = '[ APP TABLE ]: Search table';
export const SORT_TABLE = '[ APP TABLE ]: Sort table';
export const CHANGE_PER_PAGE_TABLE = '[ APP TABLE ]: Change per page table';
export const CHANGE_PAGE_TABLE = '[ APP TABLE ]: Change page table';
export const SELECT_ROW_TABLE = '[ APP TABLE ]: Select row table';
export const SELECT_ALL_ROW_TABLE = '[ APP TABLE ]: Select all row table';

export class InitTable implements IAction<void> {
  public readonly type = INIT_TABLE;
}

export class SearchTable implements IAction<{ keywords: string }> {
  public readonly type = SEARCH_TABLE;
  constructor(public payload: { keywords: string }) {}
}

export class SortTable implements IAction<{ column: TableColumn }> {
  public readonly type = SORT_TABLE;
  constructor(public payload: { column: TableColumn }) {}
}

export class ChangePerPageTable implements IAction<{ perPage: number }> {
  public readonly type = CHANGE_PER_PAGE_TABLE;
  constructor(public payload: { perPage: number }) {}
}

export class ChangePageTable implements IAction<{ page: number }> {
  public readonly type = CHANGE_PAGE_TABLE;
  constructor(public payload: { page: number }) {}
}

export class SelectRowTable
  implements IAction<{ row: TableRow; isChecked: boolean }>
{
  public readonly type = SELECT_ROW_TABLE;
  constructor(public payload: { row: TableRow; isChecked: boolean }) {}
}

export class SelectAllRowTable implements IAction<{ isChecked: boolean }> {
  public readonly type = SELECT_ALL_ROW_TABLE;
  constructor(public payload: { isChecked: boolean }) {}
}

export type AllTableAction =
  | InitTable
  | SearchTable
  | SortTable
  | ChangePerPageTable
  | ChangePageTable
  | SelectRowTable
  | SelectAllRowTable;
