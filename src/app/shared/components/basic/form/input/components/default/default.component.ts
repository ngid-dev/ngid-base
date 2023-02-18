import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=text],app-input:not([type])',
  templateUrl: './default.component.html',
  providers: [makeProvider(InputDefaultComponent)],
})
export class InputDefaultComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.default', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }
}
