import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { CategoriesService } from '../categories.service';
import { CategoryModel } from '../category.model';

@Injectable()
export class GetAllCategoryUsecase
  implements IUsecase<string, Observable<Array<CategoryModel>>>
{
  constructor(private _service: CategoriesService) {}
  execute(queryParmas?: string): Observable<Array<CategoryModel>> {
    return this._service
      .getAll(queryParmas)
      .pipe(map((responseDTOs) => CategoryModel.createList(responseDTOs)));
  }
}
