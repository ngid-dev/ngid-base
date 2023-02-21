import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { VariantType } from 'src/app/core/types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {
  @Input() variant: VariantType;
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
