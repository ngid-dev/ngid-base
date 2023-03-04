import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopupService } from 'src/app/shared/components/advanced/popup';
import { CategoryModel } from '../../../category.model';
import { PopupFormComponent } from './form.component';

@Injectable()
export class PopupFormService {
  constructor(private _popupService: PopupService) {}
  public open(
    category?: CategoryModel,
    isView: boolean = false
  ): Observable<any> {
    return this._popupService.open(PopupFormComponent, { category, isView });
  }
}
