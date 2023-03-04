import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryRequestDTO, CategoryResponseDTO } from './category.dto';

@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {}

  public getAll(queryParams?: string): Observable<Array<CategoryResponseDTO>> {
    return this._httpClient.get<Array<CategoryResponseDTO>>(
      `/categories${queryParams || ''}`
    );
  }

  public create(dto: CategoryRequestDTO): Observable<CategoryResponseDTO> {
    return this._httpClient.post<CategoryResponseDTO>('/categories', dto);
  }

  public update(dto: CategoryRequestDTO): Observable<CategoryResponseDTO> {
    return this._httpClient.put<CategoryResponseDTO>(
      `/categories/${dto.id}`,
      dto
    );
  }

  public delete(id: string): Observable<void> {
    return this._httpClient.delete<void>(`/categories/${id}`);
  }
}
