import {
  Component,
  ContentChild,
  Input,
  Provider,
  TemplateRef,
} from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import * as tableAction from '../actions/table.action';
import { Table } from '../domain/table';
import { TableColumn } from '../domain/table-column';
import { TableModel } from '../models';
import { TableService } from '../services/table.service';

export const makeTableProvider = (): Provider => {
  return TableService;
};

@Component({
  template: '',
})
export abstract class BaseTable extends BaseComponent {
  @Input() public model: TableModel<any>;
  @Input() public stringUrl: string;

  @ContentChild('actions') public actionsTemplate: TemplateRef<any>;

  public state: Table;

  private timeOut: NodeJS.Timeout;

  protected onInitBaseTable?(): void;

  constructor(private service: TableService) {
    super('table');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.initTable();
    this.listenRequestReload();
    this.onInitBaseTable && this.onInitBaseTable();
  }

  private setStateInitialization(): void {
    this.state = this.service.setState(this.model, this.stringUrl);
  }

  private initTable(): void {
    this.service.dispatch(new tableAction.InitTable());
  }

  private listenRequestReload(): void {
    this.model.requestReload.subscribe(() => {
      this.service.dispatch(new tableAction.ReloadTable());
    });
  }

  public handleSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const keywords = inputElement.value;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.service.dispatch(new tableAction.SearchTable({ keywords }));
    }, 300);
  }

  public handleSort(column: TableColumn): void {
    this.service.dispatch(new tableAction.SortTable({ column }));
  }

  public handleChangePerPage(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const perPage = +inputElement.value;
    this.service.dispatch(new tableAction.ChangePerPageTable({ perPage }));
  }
}
