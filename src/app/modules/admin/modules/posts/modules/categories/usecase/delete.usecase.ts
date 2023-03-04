import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { CategoriesService } from '../categories.service';

@Injectable()
export class DeleteCategoryUsecase
  implements IUsecase<string, Observable<void>>
{
  constructor(private _service: CategoriesService) {}
  execute(id: string): Observable<void> {
    return this._service.delete(id);
  }
}
