import { CategoryResponseDTO } from './category.dto';

export class CategoryModel {
  public id: string;
  public name: string;
  public description: string;
  public parent: string;
  public createdAt: number;
  private constructor() {}

  public static create(dto: CategoryResponseDTO): CategoryModel {
    const model = new CategoryModel();
    model.id = dto.id;
    model.name = dto.name;
    model.description = dto.description;
    model.parent = dto.parent;
    model.createdAt = dto.created_at;
    return model;
  }

  public static createList(
    dtos: Array<CategoryResponseDTO>
  ): Array<CategoryModel> {
    return (dtos || []).map((dto) => this.create(dto));
  }

  public static createEmpty(): CategoryModel {
    return new CategoryModel();
  }
}
