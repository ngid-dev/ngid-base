import { Component } from '@angular/core';
import { BaseModule } from './core/base';
import { Logger } from './core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseModule {
  constructor() {
    super('app');
    this.logger = new Logger(this);
  }

  onInit(): void {
    this.logger.debug('Come from onInit', 'hello world');
    this.logger.info('Come from onInit', 'hello world');
    this.logger.warn('Come from onInit', 'hello world');
    this.logger.error('Come from onInit', 'hello world');
    this.logger.fatal('Come from onInit', 'hello world');
    this.setStateReady();
  }
}
