import { Component } from '@angular/core';
import { BaseModule } from './core/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseModule {
  constructor() {
    super('app');
  }

  onInit(): void {
    this.setStateReady();
  }
}
