import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=email]',
  templateUrl: './email.component.html',
  providers: [makeProvider(InputEmailComponent)],
})
export class InputEmailComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.email', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }
}
