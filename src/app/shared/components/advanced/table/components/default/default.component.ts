import { Component } from '@angular/core';
import { BaseTable, makeTableProvider } from '../../base';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table:not([theme])',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  providers: [makeTableProvider()],
})
export class DefaultTableComponent extends BaseTable {
  constructor(service: TableService) {
    super(service);
  }
}
