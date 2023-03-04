import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { CategoriesService } from '../categories.service';
import { CategoryRequestDTO } from '../category.dto';
import { CategoryModel } from '../category.model';

@Injectable()
export class CreateCategoryUsecase
  implements IUsecase<CategoryModel, Observable<CategoryModel>>
{
  constructor(private _service: CategoriesService) {}

  execute(model: CategoryModel): Observable<CategoryModel> {
    const dto = CategoryRequestDTO.create(model);
    return this._service.create(dto).pipe(map(() => model));
  }
}
