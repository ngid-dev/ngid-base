import { UserResponseDTO } from '../dtos';

export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  private constructor() {}

  public isEmpty(): boolean {
    return Object.keys(this).length === 0;
  }

  public static create(responseDTO: UserResponseDTO): UserModel {
    const model = new UserModel();
    model.id = responseDTO.id;
    model.firstName = responseDTO.first_name;
    model.lastName = responseDTO.last_name;
    model.username = responseDTO.username;
    model.email = responseDTO.email;
    return model;
  }

  public static createEmpty(): UserModel {
    return new UserModel();
  }
}
