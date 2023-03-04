import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { PostsRequestDTO } from '../dtos';
import { PostsModel } from '../models';
import { PostsService } from '../services/posts.service';

@Injectable()
export class AddUsecase
  implements IUsecase<PostsModel, Observable<PostsModel>>
{
  constructor(private _service: PostsService) {}

  execute(model: PostsModel): Observable<PostsModel> {
    const dto = PostsRequestDTO.create(model);
    return this._service.create(dto).pipe(map(() => model));
  }
}
