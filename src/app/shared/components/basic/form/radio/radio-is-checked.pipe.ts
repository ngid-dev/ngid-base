import { Pipe, PipeTransform } from '@angular/core';
import { IObject } from 'src/app/core/interfaces';
import { ObjectHelper } from 'src/app/shared/helpers';

@Pipe({
  name: 'isChekced',
})
export class RadioIsCheckedPipe implements PipeTransform {
  transform(
    value: any,
    option: IObject,
    compareField: string,
    valueField: string
  ) {
    if (!value) return false;
    const field = compareField || valueField;
    if (field) {
      const resolveOptionValue = ObjectHelper.resolveValue(option, field);
      if (typeof value === 'object') {
        return JSON.stringify(value) === JSON.stringify(resolveOptionValue);
      }
      return value === resolveOptionValue;
    } else {
      return JSON.stringify(value) === JSON.stringify(option);
    }
  }
}
