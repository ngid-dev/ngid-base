import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { PostsResponseDTO } from '../dtos';
import { PostsModel } from '../models';
import { PostsService } from '../services/posts.service';

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
