import { PostsResponseDTO } from '../dtos';

export class PostsModel {
  public id: string;
  public title: string;
  public content: string;
  public featuredImage: string;
  public createdAt: number;
  private constructor() {}

  public static create(dto: PostsResponseDTO): PostsModel {
    const model = new PostsModel();
    model.id = dto.id;
    model.title = dto.title;
    model.content = dto.content;
    model.featuredImage = dto.featured_image;
    model.createdAt = dto.created_at;
    return model;
  }

  public static createList(dtos: Array<PostsResponseDTO>): Array<PostsModel> {
    return dtos.map((dto) => this.create(dto));
  }

  public static createEmpty(): PostsModel {
    return new PostsModel();
  }
}
