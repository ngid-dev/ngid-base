import { PostsModel } from '../models';

class PostDTO {
  public id: string;
  public title: string;
  public content: string;
  public featured_image: string;
  public created_at: number;
}

export class PostsResponseDTO extends PostDTO {
  private constructor() {
    super();
  }
}

export class PostsRequestDTO extends PostDTO {
  private constructor() {
    super();
  }

  public static create(model: PostsModel): PostsRequestDTO {
    const dto = new PostsRequestDTO();
    dto.id = model.id;
    dto.title = model.title;
    dto.content = model.content;
    dto.featured_image = model.featuredImage;
    dto.created_at = model.createdAt;
    return dto;
  }
}
