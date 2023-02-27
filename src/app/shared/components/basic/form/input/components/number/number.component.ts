import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=number]',
  templateUrl: './number.component.html',
  providers: [makeProvider(InputNumberComponent)],
})
export class InputNumberComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.number', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(/\D/g, '');
    this.formControl.patchValue(value ? +value : null);
    inputElement.value = value || '';
  }
}
