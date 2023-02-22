import { UserResponseDTO } from '../dtos';

export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public profilePictureUrl: string;
  public fullName: string;
  public role: string;
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
    model.profilePictureUrl = responseDTO.profile_picture_url;
    model.role = responseDTO.role;
    model.fullName = `${responseDTO.first_name} ${responseDTO.last_name}`;
    return model;
  }

  public static createEmpty(): UserModel {
    return new UserModel();
  }
}
