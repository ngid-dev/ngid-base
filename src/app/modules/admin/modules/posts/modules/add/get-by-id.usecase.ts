import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { PostsResponseDTO } from '../../shared/dtos';
import { PostsModel } from '../../shared/models';
import { PostsService } from '../../shared/services/posts.service';

@Injectable()
export class GetByIdUsecase
  implements IUsecase<string, Observable<PostsModel>>
{
  constructor(private _service: PostsService) {}

  execute(id: string): Observable<PostsModel> {
    return this._service
      .getById(id)
      .pipe(map((dto: PostsResponseDTO) => PostsModel.create(dto)));
  }
}
