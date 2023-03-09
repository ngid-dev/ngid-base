import { Component, Input, Provider } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
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

  public state: Table;

  protected abstract onInitBaseTable(): void;
  constructor(private service: TableService) {
    super('table');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.onInitBaseTable();
  }

  private setStateInitialization(): void {
    this.state = this.service.setState(this.model, this.stringUrl);
  }
}
