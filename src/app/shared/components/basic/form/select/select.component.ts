import { Component, Optional } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [makeProvider(SelectComponent)],
})
export class SelectComponent extends BaseValueAccessor {
  constructor(@Optional() controlContainer: ControlContainer) {
    super('app.select', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleChange(): void {
    this.onChange.emit(this.formControl.value);
  }
}
