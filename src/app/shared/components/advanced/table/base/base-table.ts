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

  protected abstract onInitBaseTable(): void;
  constructor(private service: TableService) {
    super('table');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.initTable();
    this.onInitBaseTable();
  }

  private setStateInitialization(): void {
    this.state = this.service.setState(this.model, this.stringUrl);
  }

  private initTable(): void {
    this.service.dispatch(new tableAction.InitTable());
  }
}
