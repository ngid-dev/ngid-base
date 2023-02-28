import { Validators as AngularValidators } from '@angular/forms';
import { alphaNumericValidator } from './sync/alphaNumeric.validator';
import { emailValidator } from './sync/email.validator';
import { patternValidator } from './sync/pattern.validator';
import { requiredValidator } from './sync/required.validator';

export const Validators = {
  compose: AngularValidators.compose,
  composeAsync: AngularValidators.composeAsync,
  // start: custom
  required: requiredValidator,
  email: emailValidator,
  pattern: patternValidator,
  alphaNumeric: alphaNumericValidator,
};
