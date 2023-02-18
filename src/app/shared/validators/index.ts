import { Validators as AngularValidators } from '@angular/forms';
import { requiredValidator } from './sync/required.validator';

export const Validators = {
  compose: AngularValidators.compose,
  composeAsync: AngularValidators.composeAsync,
  // start: custom
  required: requiredValidator,
};
