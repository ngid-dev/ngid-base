import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { TableModel } from '../models';

@Component({
  template: '',
})
export abstract class BaseTable extends BaseComponent {
  @Input() public model: TableModel<any>;
  @Input() public stringUrl: string;

  protected abstract onInitBaseTable(): void;
  constructor() {
    super('table');
  }

  protected onInit(): void {
    this.onInitBaseTable();
  }
}
