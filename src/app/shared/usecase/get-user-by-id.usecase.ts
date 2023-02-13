import { Injectable } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dtos';
import { GlobalService } from 'src/app/core/global/global.service';
import { IUsecase } from 'src/app/core/interfaces';
import { UserModel } from 'src/app/core/models';
import { UserService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class GetUserByIdUsecase
  implements IUsecase<number, Promise<UserModel>>
{
  constructor(
    private _service: UserService,
    private _globalService: GlobalService
  ) {}

  execute(id: number): Promise<UserModel> {
    return new Promise((resolve) => {
      this._service.getById(id).subscribe({
        next: (response: UserResponseDTO) => {
          const model = UserModel.create(response);
          resolve(model);
        },
        error: () => {
          resolve(UserModel.createEmpty());
        },
      });
    });
  }
}
