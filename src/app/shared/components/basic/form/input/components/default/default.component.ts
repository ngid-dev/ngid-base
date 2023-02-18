import { Component, forwardRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseValueAccessor } from 'src/app/core/base';

@Component({
  selector: 'app-input',
  templateUrl: './default.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDefaultComponent),
      multi: true,
    },
  ],
})
export class InputDefaultComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.default', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }
}
