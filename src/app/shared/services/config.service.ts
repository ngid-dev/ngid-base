import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigResponseDTO } from '../dtos';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private _httpClient: HttpClient) {}

  public getAll(): Observable<ConfigResponseDTO> {
    return this._httpClient.get<ConfigResponseDTO>(
      'http://localhost:3000/config'
    );
  }
}
