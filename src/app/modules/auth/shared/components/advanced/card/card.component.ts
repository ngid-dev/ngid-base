import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'auth-card',
  templateUrl: './card.component.html',
})
export class CardComponent extends BaseComponent {
  @Input() header: string;
  constructor() {
    super('module.auth.component.card');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
