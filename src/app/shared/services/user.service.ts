import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseDTO } from 'src/app/core/dtos';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  public getById(id: number): Observable<UserResponseDTO> {
    return this._httpClient.get<UserResponseDTO>(
      `http://localhost:3000/users/${id}`
    );
  }
}
