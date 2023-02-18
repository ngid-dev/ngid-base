import {
  Component,
  forwardRef,
  Inject,
  Input,
  Provider,
  Type,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { BaseComponent } from './base-component';

export function makeProvider(component: Type<any>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
  };
}

@Component({
  template: '',
})
export abstract class BaseValueAccessor
  extends BaseComponent
  implements ControlValueAccessor
{
  @Input() formControlName: string;
  @Input() placeholder: string;

  public formControl: FormControl;

  private _value: any;
  private _onBaseChange: () => void;
  private _onBaseTouched: () => void;

  protected abstract onInitBaseValueAccessor(): void;
  constructor(
    @Inject(String) moduleCode: string,
    private _controlContainer: ControlContainer
  ) {
    super(moduleCode);
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.onInitBaseValueAccessor();
  }

  private setStateInitialization(): void {
    this.formGroup = this._controlContainer.control as FormGroup;
    this.formControl = this.formGroup.get(this.formControlName) as FormControl;
  }

  public get isValid(): boolean {
    return this.formControl.touched && this.formControl.valid;
  }

  public get isInvalid(): boolean {
    return this.formControl.touched && this.formControl.invalid;
  }

  public get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onBaseChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onBaseTouched = fn;
  }
}
