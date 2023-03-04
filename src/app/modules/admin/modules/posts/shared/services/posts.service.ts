import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsRequestDTO, PostsResponseDTO } from '../dtos';

@Injectable()
export class PostsService {
  constructor(private _httpClient: HttpClient) {}
  public create(
    dto: PostsRequestDTO
  ): Observable<HttpResponse<PostsResponseDTO>> {
    return this._httpClient.post<HttpResponse<PostsResponseDTO>>('/posts', dto);
  }

  public getById(id: string): Observable<PostsResponseDTO> {
    return this._httpClient.get<PostsResponseDTO>(`/posts/${id}`);
  }

  public update(
    dto: PostsRequestDTO
  ): Observable<HttpResponse<PostsResponseDTO>> {
    return this._httpClient.put<HttpResponse<PostsResponseDTO>>(
      `/posts/${dto.id}`,
      dto
    );
  }

  public delete(id: string): Observable<PostsResponseDTO> {
    return this._httpClient.delete<PostsResponseDTO>(`/posts/${id}`);
  }
}
