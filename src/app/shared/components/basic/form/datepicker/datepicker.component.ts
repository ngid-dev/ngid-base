import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  providers: [makeProvider(DatepickerComponent)],
})
export class DatepickerComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.datepicker', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }
}
