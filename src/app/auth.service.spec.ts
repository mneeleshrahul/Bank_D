// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://retoolapi.dev/5qhU8q/data';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?customerId=${username}&password=${password}`);
  }

  getCustomerDetails(): Observable<any> {
    // Adjust the URL to the endpoint providing customer details
    return this.http.get('your_customer_details_endpoint');
  }
}
