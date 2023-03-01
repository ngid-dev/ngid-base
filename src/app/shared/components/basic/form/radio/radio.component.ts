import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';
import { IObject } from 'src/app/core/interfaces';
import { ObjectHelper } from 'src/app/shared/helpers';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  providers: [makeProvider(RadioComponent)],
})
export class RadioComponent extends BaseValueAccessor {
  public identifier: string;
  constructor(controlContainer: ControlContainer) {
    super('app.radio', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateIndentifier();
    this.setStateReady();
  }

  private setStateIndentifier(): void {
    this.identifier = `radio-${Math.ceil(Math.random() * 100)}`;
  }

  public handleChange(option: IObject): void {
    const value = this.optionValueField
      ? ObjectHelper.resolveValue(option, this.optionValueField)
      : option;
    this.formControl.patchValue(value);
  }
}
