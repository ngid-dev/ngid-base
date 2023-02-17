import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {
  @Input() customClass: string;
  @Output() onClick: EventEmitter<Event>;
  constructor() {
    super('app.button');
    this.onClick = new EventEmitter();
  }

  protected onInit(): void {
    this.setStateReady();
  }

  public handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
