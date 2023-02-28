import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=alphaNumeric]',
  templateUrl: './alpha-numeric.component.html',
  providers: [makeProvider(InputAlphaNumericComponent)],
})
export class InputAlphaNumericComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.alpha-numeric', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(/\W/g, '');
    this.formControl.patchValue(value || null);
    inputElement.value = value || '';
  }
}
