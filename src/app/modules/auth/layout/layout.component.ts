import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AuthLayoutComponent extends BaseComponent {
  constructor() {
    super('module.auth.layout');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
