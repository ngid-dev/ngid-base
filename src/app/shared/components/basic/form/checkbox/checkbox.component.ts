import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [makeProvider(CheckboxComponent)],
})
export class CheckboxComponent extends BaseValueAccessor {
  @Input() label: string;

  public identifier: string;
  constructor(controlContainer: ControlContainer) {
    super('app.checkbox', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateIndentifier();
    this.setStateReady();
  }

  private setStateIndentifier(): void {
    this.identifier = `checkbox-${Math.ceil(Math.random() * 100)}`;
  }
}
