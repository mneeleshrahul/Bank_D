// new-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewApiService {
  private apiUrl = 'https://retoolapi.dev/3p31zT/data';

  constructor(private http: HttpClient) {}

  getNewData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add other methods as needed
}
