import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsecase } from 'src/app/core/interfaces';
import { PostsModel } from './shared/models';
import { PostsService } from './shared/services/posts.service';

@Injectable()
export class DeleteUsecase implements IUsecase<string, Observable<PostsModel>> {
  constructor(private _service: PostsService) {}

  execute(id: string): Observable<PostsModel> {
    return this._service.delete(id).pipe(map(() => PostsModel.createEmpty()));
  }
}
