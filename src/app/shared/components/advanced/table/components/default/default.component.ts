import { Component } from '@angular/core';
import { BaseTable } from '../../base';

@Component({
  selector: 'app-table:not([theme])',
  templateUrl: './default.component.html',
})
export class DefaultTableComponent extends BaseTable {
  constructor() {
    super();
  }

  protected onInitBaseTable(): void {
    console.log('INFO: Come from default Table');
    console.log(this.model);
    console.log(this.stringUrl);
  }
}
