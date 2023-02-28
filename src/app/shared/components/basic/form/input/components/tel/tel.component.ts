import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=tel]',
  templateUrl: './tel.component.html',
  providers: [makeProvider(InputTelComponent)],
})
export class InputTelComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.tel', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(/\D/g, '');
    this.formControl.patchValue(value || null);
    inputElement.value = value;
  }
}
