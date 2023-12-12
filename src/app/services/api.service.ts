import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/models/api.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getData$():Observable<ApiResponse> {
    return this.http.get<ApiResponse>('/assets/response.json');
    // ToDo: catch error and handle it
  }

}
