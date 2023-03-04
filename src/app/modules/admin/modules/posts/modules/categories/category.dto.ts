import { CategoryModel } from './category.model';

class CategoryDTO {
  public id: string;
  public name: string;
  public description: string;
  public parent: string;
  public created_at: number;
}

export class CategoryRequestDTO extends CategoryDTO {
  private constructor() {
    super();
  }

  public static create(model: CategoryModel): CategoryRequestDTO {
    const dto = new CategoryRequestDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.description = model.description;
    dto.parent = model.parent;
    dto.created_at = model.createdAt;
    return dto;
  }
}

export class CategoryResponseDTO extends CategoryDTO {
  private constructor() {
    super();
  }
}
