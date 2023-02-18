import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const requiredValidator = (message: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (typeof control.value === 'undefined' || control.value === null) {
      return { message };
    }
    return null;
  };
};
